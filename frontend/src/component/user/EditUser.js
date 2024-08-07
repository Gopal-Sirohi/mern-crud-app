import axios from "axios";
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {formvalidation} from "./Validation/formvalidation";
import toast from "react-hot-toast";
import {MdOutlineClose} from "react-icons/md";
import {Link, useParams, useNavigate} from "react-router-dom";

const Editdata = () => {
   const {id} = useParams();
   const navigate = useNavigate();

   const [data, setFieldValue] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const dataSingle = await axios.get(`http://localhost:8000/api/usersingle/${id}`);
         try {
            setFieldValue (dataSingle.data);
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, []);

   const dataForm = async (data) => {
     
      try {
         const res = await axios.put(`http://localhost:8000/api/updateuser/${id}`, data);
         if (res.status === 200) {
            toast.success(res.data.msg, {
               position: "top-center",
               style: {
                  borderRadius: "0px",
                  background: "#198754",
                  color: "#fff",
                  margin: "50px",
               },
            });
            navigate("/");
         }
      } catch (error) {
         console.log(error);
      }
   };
  
  
   return (
      <>
         <div className="container pt-5 my-5 mt-5">
            <div className="row justify-content-center pt-4">
               <div className="col-md-12">
                  <div className="card card-info">
                     <div className="card-header">
                        <h3 className="card-title">Edit data</h3>
                        <Link to={`/`}>
                           <button type="submit" className="btn btn-danger btn-block btn-sm float-end">
                              <MdOutlineClose className="icon" /> Close
                           </button>
                        </Link>
                     </div>
                     <Formik
                      enableReinitialize={true}
                        initialValues={
                           {
                           first_name: data.first_name || "" ,
                           last_name: data.last_name || "" ,
                           email: data.email || "" ,
                           mobile: data.mobile || "" ,
                           address: data.address || "" ,
                           country: data.country || "" ,
                           state: data.state || "" ,
                           city: data.city || "" ,
                           pincode: data.pincode || "" ,
                           status: data.status || "" ,
                        }
                        }
                        validationSchema={formvalidation}
                        onSubmit={(values) => {
                           let data = {
                              full_name: `${values.first_name} ${values.last_name}`,
                              first_name: values.first_name,
                              last_name: values.last_name,
                              email: values.email,
                              mobile: values.mobile,
                              address: values.address,
                              country: values.country,
                              state: values.state,
                              city: values.city,
                              pincode: values.pincode,
                              status: values.status,
                           };

                           dataForm(data);
                        }}>
                        {({values, errors, handleSubmit, touched, setFieldValue}) => (

                           <Form autoComplete="off" onSubmit={handleSubmit}>
                              <div className="card-body">
                                 <div className="row">
                                    <div className="col-sm-6">
                                       <div className="form-group row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                             First Name <span className="text-danger">*</span>
                                          </label>
                                          <div className="col-sm-8">
                                             <Field type="text" name="first_name" className="form-control" placeholder="First Name" value={values.first_name} />
                                          </div>
                                          <div className="offset-lg-4 col-lg-8">{errors.first_name && touched.first_name ? <p style={{color: "red", margin: "0px"}}>{errors.first_name}</p> : null}</div>
                                       </div>
                                    </div>
                                    <div className="col-sm-6">
                                       <div className="form-group row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                             Last Name <span className="text-danger">*</span>
                                          </label>
                                          <div className="col-sm-8">
                                             <Field type="text" name="last_name" className="form-control" placeholder="Last Name" value={values.last_name} />
                                          </div>
                                          <div className="offset-lg-4 col-lg-8">{errors.last_name && touched.last_name ? <p style={{color: "red", margin: "0px"}}>{errors.last_name}</p> : null}</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col-sm-6">
                                       <div className="form-group row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                             Email ID <span className="text-danger">*</span>
                                          </label>
                                          <div className="col-sm-8">
                                             <Field type="email" name="email" className="form-control" placeholder="Email ID" value={values.email} />
                                          </div>
                                          <div className="offset-lg-4 col-lg-8">{errors.email && touched.email ? <p style={{color: "red", margin: "0px"}}>{errors.email}</p> : null}</div>
                                       </div>
                                    </div>
                                    <div className="col-sm-6">
                                       <div className="form-group row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                             Mobile .No <span className="text-danger">*</span>
                                          </label>
                                          <div className="col-sm-8">
                                             <Field type="number" name="mobile" className="form-control" placeholder="Mobile. No" value={values.mobile} />
                                          </div>
                                          <div className="offset-lg-4 col-lg-8">{errors.mobile && touched.mobile ? <p style={{color: "red", margin: "0px"}}>{errors.mobile}</p> : null}</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col-sm-6">
                                       <div className="form-group row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                             Address <span className="text-danger">*</span>
                                          </label>
                                          <div className="col-sm-8">
                                             <Field type="text" name="address" className="form-control" placeholder="Address" value={values.address} />
                                          </div>
                                          <div className="offset-lg-4 col-lg-8">{errors.address && touched.address ? <p style={{color: "red", margin: "0px"}}>{errors.address}</p> : null}</div>
                                       </div>
                                    </div>
                                    <div className="col-sm-6">
                                       <div className="form-group row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                             Country <span className="text-danger">*</span>
                                          </label>
                                          <div className="col-sm-8">
                                             <Field type="text" name="country" className="form-control" placeholder="Country" value={values.country} />
                                          </div>
                                          <div className="offset-lg-4 col-lg-8">{errors.country && touched.country ? <p style={{color: "red", margin: "0px"}}>{errors.country}</p> : null}</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col-sm-6">
                                       <div className="form-group row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                             State <span className="text-danger">*</span>
                                          </label>
                                          <div className="col-sm-8">
                                             <Field type="text" name="state" className="form-control" placeholder="State" value={values.state} />
                                          </div>
                                          <div className="offset-lg-4 col-lg-8">{errors.state && touched.state ? <p style={{color: "red", margin: "0px"}}>{errors.state}</p> : null}</div>
                                       </div>
                                    </div>
                                    <div className="col-sm-6">
                                       <div className="form-group row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                             City <span className="text-danger">*</span>
                                          </label>
                                          <div className="col-sm-8">
                                             <Field type="text" name="city" className="form-control" placeholder="City" value={values.city} />
                                          </div>
                                          <div className="offset-lg-4 col-lg-8">{errors.city && touched.city ? <p style={{color: "red", margin: "0px"}}>{errors.city}</p> : null}</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col-sm-6">
                                       <div className="form-group row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                             Pincode <span className="text-danger">*</span>
                                          </label>
                                          <div className="col-sm-8">
                                             <Field type="text" name="pincode" className="form-control" placeholder="Pincode" value={values.pincode} />
                                          </div>
                                          <div className="offset-lg-4 col-lg-8">{errors.pincode && touched.pincode ? <p style={{color: "red", margin: "0px"}}>{errors.pincode}</p> : null}</div>
                                       </div>
                                    </div>
                                    <div className="col-sm-6">
                                       <div className="form-group row mb-3">
                                          <label className="col-sm-4 col-form-label">
                                             data Status <span className="text-danger">*</span>
                                          </label>
                                          <div className="col-sm-8">
                                             <Field as="select" name="status" className="form-control" value={values.status}>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                             </Field>
                                          </div>
                                          <div className="offset-lg-4 col-lg-8">{errors.status && touched.status ? <p style={{color: "red", margin: "0px"}}>{errors.status}</p> : null}</div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="card-footer pb-2">
                                 <button type="submit" className="btn btn-info float-end w-10">
                                    Save
                                 </button>
                                 <Link to={`/`}>
                                    <button type="submit" className="btn btn-secondary float-end me-3 w-10">
                                       Cancel
                                    </button>
                                 </Link>
                              </div>
                           </Form>
                        )}
                     </Formik>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Editdata;
