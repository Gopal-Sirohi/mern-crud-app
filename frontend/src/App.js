import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Header from "./component/Header";
import CreateUser from "./component/user/CreateUser";
import EditUser from "./component/user/EditUser";
import ViewUser from "./component/user/ViewUser";
import UserList from "./component/user/UserList";
function App() {
  return (
    <>
    <BrowserRouter>
    <header className="header_wrap fixed-top mb-5">
     <Header />
    </header>
    <Routes>
      <Route exact path="/" element={<UserList />} />
      <Route path="/adduser" element={<CreateUser />} />
      <Route path="/edituser/:id" element={<EditUser />} />
      <Route path="/viewuser/:id" element={<ViewUser />} />
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
