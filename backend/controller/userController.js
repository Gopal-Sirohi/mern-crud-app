import User from "../model/userModel.js";

export const createUser = async (req, res) => {
   try {
      const {full_name, first_name, last_name, email, mobile, address, country, state, city, pincode, status} = req.body;
      const userData = new User({full_name, first_name, last_name, email, mobile, address, country, state, city, pincode, status});
      if (!userData) {
         return res.status(404).json({msg: "User data not found"});
      }
      await userData.save();
      res.status(200).json({msg: "User created successfully"});
   } catch (error) {
      if (error.code === 11000 && error.keyPattern.email) {
         return res.json({status: "failed", errors: {email: `Email already exists`}});
      } else if (error.code === 11000 && error.keyPattern.mobile) {
         return res.json({status: "failed", errors: {mobile: `Mobile number already exists`}});
      } else {
         console.error("Failed to create user:", error);
         res.status(500).json({status: "failed", errors: ["Internal server error"]});
      }
   }
};

export const userList = async (req, res) => {
   try {
      const userData = await User.find().sort({createdAt: -1});
      if (!userData) {
         return res.status(404).json({msg: "User data not found"});
      }
      res.status(200).json(userData);
   } catch (error) {
      res.status(500).json({error: error});
   }
};

export const userSingle = async (req, res) => {
   try {
      const id = req.params.id;
      const userExist = await User.findById(id);
      if (!userExist) {
         return res.status(404).json({msg: "User not found"});
      }
      res.status(200).json(userExist);
   } catch (error) {
      res.status(500).json({error: error});
   }
};

export const updateUser = async (req, res) => {
   try {
      const id = req.params.id;
      const userExist = await User.findById(id);
      if (!userExist) {
         return res.status(401).json({msg: "User not found"});
      }
      const updatedData = await User.findByIdAndUpdate(id, req.body, {new: true});
      res.status(200).json({msg: "User updated successfully", data: updatedData});
   } catch (error) {
      res.status(500).json({error: error});
   }
};

export const updateUserStatus = async (req, res) => {
   try {
      const id = req.params.id;
      const status = req.params.status;
      const userExist = await User.findById(id);
      if (!userExist) {
         return res.status(401).json({msg: "User not found"});
      }
      const updatedData = await User.findByIdAndUpdate(id, {$set: {status: status}}, {new: true});
      res.status(200).json({msg: "User status updated successfully", data: updatedData});
   } catch (error) {
      res.status(500).json({error: error});
   }
};

export const deleteUser = async (req, res) => {
   try {
      const id = req.params.id;
      const userExist = await User.findById(id);
      if (!userExist) {
         return res.status(404).json({msg: "User not exist"});
      }
      await User.findByIdAndDelete(id);
      res.status(200).json({msg: "User deleted successfully"});
   } catch (error) {
      res.status(500).json({error: error});
   }
};
