import express from "express";
const route = express.Router();

import { createUser, userList, userSingle, updateUser, updateUserStatus, deleteUser } from "../controller/userController.js";

route.post("/createuser", createUser);
route.get("/userlist", userList);
route.get("/usersingle/:id", userSingle);
route.put("/updateuser/:id", updateUser);
route.put("/updateuserstatus/:id/:status", updateUserStatus);
route.delete("/deleteuser/:id", deleteUser);

export default route;