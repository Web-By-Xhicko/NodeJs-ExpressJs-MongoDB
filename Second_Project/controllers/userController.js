const asyncHandler = require("express-async-handler")

//@desc Register Users
//@route POST /api/user/register
//@access public
const registerUser = asyncHandler(
   async  (req, res) => {res.json({message: "Register The User"})}
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