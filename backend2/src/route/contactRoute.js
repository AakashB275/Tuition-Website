const express = require("express");
const {createContact} = require("../controllers/contactControl")
const router = express.Router()

router.post("/contact", createContact)

module.exports = router;