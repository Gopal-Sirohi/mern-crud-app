import React from "react";
import crudLogo from "../assets/logo/crud-logo.png";
const Header = () => {
 return (
  <>
   <div className="top-header p-2 bg-light border-bottom">
    <div className="container">
     <div className="row">
      <div className="col-md-3">
       <img alt="logo" src={crudLogo} style={{width: "auto", height:"42px"}} />
      </div>
      <div className="col-md-7 text-center">
       <h3 className="">CRUD APPLICATION MERN STACK</h3>
      </div>
     </div>
    </div>
   </div>
   
  </>
 );
};

export default Header;
