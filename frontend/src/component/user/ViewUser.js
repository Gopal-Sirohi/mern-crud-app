import axios from "axios";
import React, {useState, useEffect} from "react";
import {MdOutlineClose} from "react-icons/md";
import {Link, useParams} from "react-router-dom";

const ViewUser = () => {
   const {id} = useParams();

   const [userstate, setUserState] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const userSingle = await axios.get(`http://localhost:8000/api/usersingle/${id}`);
         try {
            setUserState(userSingle.data);
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, [id]);

   return (
      <>
         <div className="container pt-5 my-5 mt-5">
            <div className="row justify-content-center pt-4">
               <div className="col-md-12">
                  <div className="card card-info">
                     <div className="card-header">
                        <h3 className="card-title">User Details</h3>
                        <Link to={`/`}>
                           <button type="submit" className="btn btn-danger btn-block btn-sm float-end">
                              <MdOutlineClose className="icon" /> Close
                           </button>
                        </Link>
                     </div>
                     <div className="card-body">
                     <div className="row">
                           <div className="col-sm-12 text-center">
                              <div className="form-group row mb-3">
                                 <h3>{userstate.first_name} {userstate.last_name}</h3>
                                 <hr/>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="form-group row mb-3">
                                 <label className="col-sm-4 col-form-label">First Name:</label>
                                 <div className="col-sm-8">{userstate.first_name}</div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="form-group row mb-3">
                                 <label className="col-sm-4 col-form-label">Last Name:</label>
                                 <div className="col-sm-8">{userstate.last_name}</div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="form-group row mb-3">
                                 <label className="col-sm-4 col-form-label">Email ID:</label>
                                 <div className="col-sm-8">{userstate.email}</div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="form-group row mb-3">
                                 <label className="col-sm-4 col-form-label">Mobile .No:</label>
                                 <div className="col-sm-8">{userstate.mobile}</div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="form-group row mb-3">
                                 <label className="col-sm-4 col-form-label">Address:</label>
                                 <div className="col-sm-8">{userstate.address}</div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="form-group row mb-3">
                                 <label className="col-sm-4 col-form-label">Country:</label>
                                 <div className="col-sm-8">{userstate.country}</div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="form-group row mb-3">
                                 <label className="col-sm-4 col-form-label">State:</label>
                                 <div className="col-sm-8">{userstate.state}</div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="form-group row mb-3">
                                 <label className="col-sm-4 col-form-label">City:</label>
                                 <div className="col-sm-8">{userstate.city}</div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="form-group row mb-3">
                                 <label className="col-sm-4 col-form-label">Pincode:</label>
                                 <div className="col-sm-8">{userstate.pincode}</div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="form-group row mb-3">
                                 <label className="col-sm-4 col-form-label">User Status:</label>
                                 <div className="col-sm-8">{userstate.status}</div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="form-group row mb-3">
                                 <label className="col-sm-4 col-form-label">User Created At:</label>
                                 <div className="col-sm-8"> {new Date(userstate.createdAt).toLocaleDateString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
               })}</div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="form-group row mb-3">
                                 <label className="col-sm-4 col-form-label">User Updated At:</label>
                                 <div className="col-sm-8">{new Date(userstate.updatedAt).toLocaleDateString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
               })}</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ViewUser;
