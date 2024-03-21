const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")


const validateToken = asyncHandler(
   async(req, res, next) => {
      let token
      let authHeader = req.headers.Authorization || req.headers.authorization
      if(authHeader && authHeader.startsWith("Bearer")){
         token = authHeader.split(" ")[1]
         jwt.verify(token, process.env.ACESS_TOKEN_SECRETE, (err, decoded) => {
            if(err){
               res.status(401)
               throw new Error("User not Authorized")
            }
            req.user = decoded.user
            next()
         })

      if(!token){
         req.status(401)
         throw new Error("Not Authorized,Token Missing!")
      }
      }
   }
)


module.exports = validateToken