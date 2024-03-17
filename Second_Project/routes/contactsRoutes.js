const express = require("express")
const router = express.Router()


router.route("/").get()

router.route("/").post((req, res) => {
   res.status(200).json({
      message: "Create A Contact"
   })
})

router.route("/:id").get((req, res) => {
   res.status(200).json({
      message: `Get Contact For ${req.params.id}`
   })
})

router.route("/:id").put((req, res) => {
   res.status(200).json({
      message:  `Update Contact For ${req.params.id}`
   })
})

router.route("/:id").delete((req, res) => {
   res.status(200).json({
      message: `Delete  Contact For ${req.params.id}`
   })
})

module.exports = router 