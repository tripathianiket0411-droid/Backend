const express = require("express");
const { postController } = require("../controllers/post.controller");
const uploads = require("../config/multerConfig");

const router = express.Router();

router.post("/create", uploads.single("image"),postController)

module.exports = router;
