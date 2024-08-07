import mongoose from "mongoose";

const connectdb = (con) =>{
    return mongoose.connect(con).then(() =>{
        console.log("connection successfull");
    }).catch((err) =>{
        console.log("database error :",err);
    })
}

export default connectdb;
// module.exports = connectdb