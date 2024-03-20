const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

//@desc Register Users
//@route POST /api/user/register
//@access public
const registerUser = asyncHandler(
   async  (req, res) => {
      const {username, email, password} = req.body
      if(!username || !email || !password){
         res.status(400)
         throw new Error("all fields Are Required")
      }

      res.json({message: "Register The User"})}
)

//@desc Login Users
//@route POST /api/user/login
//@access public
const loginUser = asyncHandler(
   async  (req, res) => {res.json({message: "Login The User"})}
) 

//@desc Get current User 
//@route Get /api/user/current
//@access private
const currentUser = asyncHandler(
   async  (req, res) => {res.json({message: "Current User Information"})}
) 

module.exports = {registerUser, loginUser, currentUser}