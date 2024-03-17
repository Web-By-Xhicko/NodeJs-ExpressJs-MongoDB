//@desc Get all Contacts 
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
   res.status(200).json({
      message: "Get All Contacts"
   })
}


module.exports = {getContact}