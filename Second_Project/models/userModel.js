const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
   username: {
      type: String,
      required: [true, "Please Add your Username"],
   },
   email: {
      type: String,
      required: [true, "Please Add your Email"],
      unique: [true, "Email Already Exist"]
   },
   password: {
      type: String,
      required: [true, "Please Enter Your Password"],
   }
}, {
   timestamps: true,
})

module.exports = mongoose.model("User", userSchema)