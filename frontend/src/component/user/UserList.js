import React, {useState, useEffect} from "react";
import axios from "axios";
import {FaPlus} from "react-icons/fa6";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {MdDeleteForever} from "react-icons/md";
import {BiSolidEdit} from "react-icons/bi";
import {FaEye} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {BsQuestionLg} from "react-icons/bs";
const UserList = () => {
   const [users, setUsers] = useState([]);
   const [isdelete, setisdelete] = useState(0);
   const [isupdate, setisupdate] = useState(0);
   const navigate = useNavigate();
   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get("http://localhost:8000/api/userlist");
         try {
            const dataWithSerialNumbers = response.data.map((row, index) => ({
               ...row,
               serialNo: index + 1,
               id: index + 1,
               formatdate: new Date(row.createdAt).toLocaleDateString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
               }),
            }));
            setUsers(dataWithSerialNumbers);
         } catch (error) {}
      };
      fetchData();
   }, []);

   const colums = [
      {
         field: "serialNo",
         headerName: "S.No",
         headerAlign: "center",
         align: "center",
         flex: 0.3,
      },
      {
         field: "full_name",
         headerName: "Full Name",
         headerAlign: "center",
         align: "center",
         flex: 0.6,
      },
      {
         field: "email",
         headerName: "Email",
         headerAlign: "center",
         align: "center",
         flex: 1,
      },
      {
         field: "mobile",
         headerName: "Mobile No",
         headerAlign: "center",
         align: "center",
         flex: 1,
      },
      {
         field: "country",
         headerName: "Country",
         headerAlign: "center",
         align: "center",
         flex: 0.7,
      },
      {field: "formatdate", headerName: "Created Date & Time", flex: 1},
      {
         field: "status",
         headerName: "Status",
         headerAlign: "center",
         align: "center",
         flex: 0.5,
         renderCell: ({row: {_id, status}}) => {
            return (
               <div>
                  <Link
                     to="#"
                     onClick={() => {
                        setisupdate({_id, status});
                     }}>
                     <button className={status === "Active" ? "btn btn-success custombtn12 custombtn122" : "btn btn-danger custombtn12 custombtn121"}>{status === "Active" ? "Active" : "Inactive"}</button>
                  </Link>
               </div>
            );
         },
      },
      {
         field: "_id",
         headerName: "Action",
         headerAlign: "center",
         align: "center",
         flex: 0.8,
         renderCell: ({row: {_id}}) => {
            return (
               <div>
                  <Link to={`/viewuser/${_id}`}>
                     <FaEye style={{paddingRight: "5px"}} fontSize={23} color="#007bff" />
                  </Link>
                  <Link to={`/edituser/${_id}`}>
                     <BiSolidEdit style={{paddingRight: "5px"}} fontSize={23} color="#17a2b8" />
                  </Link>
                  <Link
                     to="#"
                     onClick={() => {
                        setisdelete(_id);
                     }}>
                     <MdDeleteForever fontSize={23} color="#dc3545" />
                  </Link>
               </div>
            );
         },
      },
   ];

   // delete user record start here
   const deleteUser = async (userId) => {
      await axios.delete(`http://localhost:8000/api/deleteuser/${isdelete}`, isdelete);
      try {
         setisdelete(0);
         window.location.reload();
      } catch (error) {}
   };
   // delete user record end here

   // delete user record start here
   const updateUserStatus = async (e) => {
      e.preventDefault();

      try {
         const response = await axios.put(`http://localhost:8000/api/updateuserstatus/${isupdate._id}/${isupdate.status === "Active" ? "Inactive" : "Active"}`, isupdate);
         setisupdate(0);
         navigate("/", { replace: true });
         // window.location.reload();
      } catch (error) {}
   };
   // delete user record end here

   return (
      <>
         <div className="container pt-5 my-5 mt-5">
            <div className="row justify-content-center pt-4">
               <div className="col-md-12">
                  <div className="card card-danger">
                     <div className="card-header">
                        <h2 className="card-title">Users List</h2>
                        <Link to={`/adduser`}>
                           <button type="submit" className="btn btn-success btn-block btn-sm float-end">
                              <FaPlus className="icon" /> Add User
                           </button>
                        </Link>
                     </div>
                     <div className="card-body">
                        <div className="row"></div>
                        <DataGrid
                           autoHeight
                           {...users}
                           columns={colums}
                           rows={users}
                           density="compact"
                           initialState={{
                              ...users.initialState,
                              pagination: {paginationModel: {pageSize: 10}},
                           }}
                           pageSizeOptions={[10, 20, 30, 50, 100]}
                           slots={{toolbar: GridToolbar}}
                        />

                        <div className={isdelete !== 0 ? "modal fade show" : "modal fade"} style={{display: isdelete !== 0 ? "block" : "none"}} id="exampleModal1400000" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                           <div className="modal-dialog modal-dialog-centered ">
                              <div className="modal-content">
                                 <BsQuestionLg className="question-logo" />
                                 <div className="modal-header mod-line"></div>
                                 <div className="modal-body">
                                    <div className="row gy-3 mt-2">
                                       <h1 className="ccedit-h">Warning</h1>
                                       <p className="ccedit-p">Do You Really Want to Delete This Reord</p>
                                    </div>
                                 </div>
                                 <div className="modal-footer mod-line m-auto">
                                    <button type="button" className="btn btn-danger mx-4" onClick={deleteUser}>
                                       Delete
                                    </button>
                                    <button
                                       type="button"
                                       className="btn text-white"
                                       style={{background: "grey"}}
                                       onClick={() => {
                                          setisdelete(0);
                                       }}>
                                       Cancel
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className={isupdate !== 0 ? "modal fade show" : "modal fade"} style={{display: isupdate !== 0 ? "block" : "none"}} id="exampleModal1400000" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                           <div className="modal-dialog modal-dialog-centered ">
                              <div className="modal-content">
                                 <BsQuestionLg className="question-logo" />
                                 <div className="modal-header mod-line"></div>
                                 <div className="modal-body">
                                    <div className="row gy-3 mt-2">
                                       <h1 className="ccedit-h">Warning</h1>
                                       <p className="ccedit-p">Do You Really Want to Change Status</p>
                                    </div>
                                 </div>
                                 <div className="modal-footer mod-line m-auto">
                                    <button type="button" className="btn btn-danger mx-4" onClick={updateUserStatus}>
                                       Change Status
                                    </button>

                                    <button
                                       type="button"
                                       className="btn text-white"
                                       style={{background: "grey"}}
                                       onClick={() => {
                                          setisupdate(0);
                                       }}>
                                       Cancel
                                    </button>
                                 </div>
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

export default UserList;
