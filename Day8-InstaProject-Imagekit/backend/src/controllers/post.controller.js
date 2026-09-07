const postModel = require("../models/postModel");
const sendFiles = require("../service/storage.service");

const postController = async (req, res) => {
  try {
    const caption = req.body.caption;
    const file = req.file;

    if (!caption || !file)
      return res.status(400).json({
        success: false,
        message: "fields are required",
      });

    const uploadImage = await sendFiles(file.buffer, file.originalname);

    console.log(uploadImage);

    const post = await postModel.create({
      caption,
      image: uploadImage.url,
      
    });

    return res.status(201).json({
      success: true,
      message: "post created successfully",
      post,
    });
  } catch (error) {
    console.log("error in creating post", error);
  }
};

module.exports = { postController };
