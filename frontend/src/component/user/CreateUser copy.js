import axios from "axios";
import React, {useState} from "react";
import toast from "react-hot-toast";
import {MdOutlineClose} from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";

const CreateUser = () => {
   const users = {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      address: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      status: "Active",
   };
   const [userstate, setUserState] = useState({users});
   const navigate = useNavigate();

   const handleChange = (e) => {
      setUserState({
         ...userstate,
         [e.target.name]: e.target.value,
      });
   };

   const handleFormSave = async (e) => {
      e.preventDefault();
      try {
         const userstateData = {...userstate, full_name: `${userstate.first_name} ${userstate.last_name}`};
         const res = await axios.post("http://localhost:8000/api/createuser", userstateData);
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
            console.log(res.data.msg);
            navigate("/");
         }
         setUserState({users});
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
                        <h3 className="card-title">Add User</h3>

                        <Link to={`/`}>
                           <button type="submit" className="btn btn-danger btn-block btn-sm float-end">
                              <MdOutlineClose className="icon" /> Close
                           </button>
                        </Link>
                     </div>
                     <form>
                        <div className="card-body">
                           <div className="row">
                              <div className="col-sm-6">
                                 <div className="form-group row mb-3">
                                    <label className="col-sm-4 col-form-label">
                                       First Name <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-8">
                                       <input type="text" name="first_name" className="form-control" placeholder="First Name" value={userstate.first_name} onChange={handleChange} />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="form-group row mb-3">
                                    <label className="col-sm-4 col-form-label">
                                       Last Name <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-8">
                                       <input type="text" name="last_name" className="form-control" placeholder="Last Name" value={userstate.last_name} onChange={handleChange} />
                                    </div>
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
                                       <input type="email" name="email" className="form-control" placeholder="Email ID" value={userstate.email} onChange={handleChange} />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="form-group row mb-3">
                                    <label className="col-sm-4 col-form-label">
                                       Mobile .No <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-8">
                                       <input type="number" name="mobile" className="form-control" placeholder="Mobile. No" value={userstate.mobile} onChange={handleChange} />
                                    </div>
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
                                       <input type="text" name="address" className="form-control" placeholder="Address" value={userstate.address} onChange={handleChange} />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="form-group row mb-3">
                                    <label className="col-sm-4 col-form-label">
                                       Country <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-8">
                                       <input type="text" name="country" className="form-control" placeholder="Country" value={userstate.country} onChange={handleChange} />
                                    </div>
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
                                       <input type="text" name="state" className="form-control" placeholder="State" value={userstate.state} onChange={handleChange} />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="form-group row mb-3">
                                    <label className="col-sm-4 col-form-label">
                                       City <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-8">
                                       <input type="text" name="city" className="form-control" placeholder="City" value={userstate.city} onChange={handleChange} />
                                    </div>
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
                                       <input type="text" name="pincode" className="form-control" placeholder="Pincode" value={userstate.pincode} onChange={handleChange} />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="form-group row mb-3">
                                    <label className="col-sm-4 col-form-label">
                                       User Status <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-8">
                                       <select as="select" name="status" className="form-control" value={userstate.status} onChange={handleChange}>
                                          <option value="Active">Active</option>
                                          <option value="Inactive">Inactive</option>
                                       </select>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card-footer pb-2">
                           <button type="submit" className="btn btn-info float-end w-10" onClick={handleFormSave}>
                              Save
                           </button>
                           <Link to={`/`}>
                              <button type="submit" className="btn btn-secondary float-end me-3 w-10">
                                 Cancel
                              </button>
                           </Link>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default CreateUser;
