const asyncHandler = require("express-async-handler")

//@desc Get all Contacts 
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(
   async (req, res) => {
      res.status(200).json({
         message: "Get All Contacts"
      })
   }
) 

//@desc Create a new Contacts 
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(
   async (req, res) => {
      console.log("The Request Body is :", req.body);
      const {name, email, phone} = req.body
      if(!name || !email || !phone){
         res.status(400)
         throw new Error("All Fields Are Required!")
      }
      res.status(201).json({
         message: "Create A Contact"
      })
   }
)

//@desc Get Individual Contact 
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(
   async (req, res) => {
      res.status(200).json({
         message: `Get Contact For ${req.params.id}`
      })
   }
)

//@desc Update Individual Contact 
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(
   async (req, res) => {
      res.status(200).json({
         message:  `Update Contact For ${req.params.id}`
      })
   }
   
)
//@desc Delete Individual Contact 
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(
   async (req, res) => {
      res.status(200).json({
         message: `Delete  Contact For ${req.params.id}`
      })
   }
)


module.exports = {getContacts,
                  createContact,
                  getContact,
                  updateContact,
                  deleteContact }