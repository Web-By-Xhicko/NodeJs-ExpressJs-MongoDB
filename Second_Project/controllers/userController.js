const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

//@desc Register Users
//@route POST /api/user/register
//@access public
const registerUser = asyncHandler(
   async  (req, res) => {
      const {username, email, password} = req.body
      if(!username || !email || !password){
         res.status(400)
         throw new Error("All fields Are Required")
      }
      const userAvailable = await User.findOne({email})
      if(userAvailable){
         res.status(400)
         throw new Error("User Already Registered")
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      console.log("Hashed Password:", hashedPassword);

      const user = await User.create({
         username,
         email,
         password: hashedPassword,
      })

      console.log(`User Created: ${user}`);
      if(user){
         res.status(201).json({_id: user.id, email: user.email})
      }
      else{
         res.status(400)
         throw new Error("User Data Is Not Valid")
      }
      res.json({message: "Register The User"})}
)

//@desc Login Users
//@route POST /api/user/login
//@access public
const loginUser = asyncHandler(
   async  (req, res) => {
      const {email, password} = req.body
      if(!email || !password){
         res.status(400)
         throw new Error("All Fields Are Mandetory")
      }

      const user = await User.findOne({email})
      if(user && (await bcrypt.compare(password, user.password))){
         const acessToken = jwt.sign({
            user: {
               username: user.username,
               email: user.email,
               id: user.id
            },
         }, process.env.ACESS_TOKEN_SECRETE,
            {expiresIn: "1m"})
         res.status(200).json({acessToken})
      }
      else{
         res.status(401)
         throw new Error("Invalid Email or Password")
      }
   }
) 

//@desc Get current User 
//@route Get /api/user/current
//@access private
const currentUser = asyncHandler(
   async  (req, res) => {res.json({message: "Current User Information"})}
) 

module.exports = {registerUser, loginUser, currentUser}