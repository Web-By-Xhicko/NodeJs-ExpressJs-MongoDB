const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

//@desc Get all Contacts 
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(
   async (req, res) => {
      const contacts = await Contact.find({user_id: req.user.id})
      res.status(200).json(contacts)
   }
) 

//@desc Create a new Contacts 
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(
   async (req, res) => {
      console.log("The Request Body is :", req.body);
      const {name, email, phone} = req.body
      if(!name || !email || !phone){
         res.status(400)
         throw new Error("All Fields Are Required!")
      }
      const contact = await Contact.create({
       name,
       email,
       phone,
       user_id: req.user.id 
      })
      res.status(201).json(contact)
   }
)

//@desc Get Individual Contact 
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(
   async (req, res) => {
      const contact = await Contact.findById(req.params.id)
      if(!contact){
         res.status(404)
         throw new Error("Contact Not Found!")
      }
      res.status(200).json(contact)
   }
)

//@desc Update Individual Contact 
//@route PUT /api/contacts/:id
//@access private 
const updateContact = asyncHandler(
   async (req, res) => {
      const contact = await Contact.findById(req.params.id)
      if(!contact){
         res.status(404)
         throw new Error("Contact Not Found!")
      }
      if(contact.user_id.toString() !== req.user.id){
         res.status(403)
         throw new Error("User Does Not Have Permission")
      }
      const updatedContact = await Contact.findByIdAndUpdate(
         req.params.id,
         req.body,
         {new: true}
      )
      res.status(200).json(updatedContact)
   }
   
)

//@desc Delete Individual Contact 
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(
   async (req, res) => {
      const contact = await Contact.findById(req.params.id)
      if(!contact){
         res.status(404)
         throw new Error("Contact Not Found!")
      }

      if(contact.user_id.toString() !== req.user.id){
         res.status(403)
         throw new Error("User Does Not Have Permission")
      }

      await contact.deleteOne()
      res.status(200).json(contact)
   }
)



module.exports = {getContacts,
                  createContact,
                  getContact,
                  updateContact,
                  deleteContact }