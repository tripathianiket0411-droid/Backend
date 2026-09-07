const express  =  require("express");
const { create } = require("../controller/controller");
const upload = require("../config/multer");


const router = express.Router();

router.post("/create",upload.single('profile_pic') ,create)

module.exports = router;