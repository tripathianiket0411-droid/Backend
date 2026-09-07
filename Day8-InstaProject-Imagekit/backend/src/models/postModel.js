const { default: mongoose } = require("mongoose");

const postSchema = mongoose.Schema(
  {
    caption: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);


const postModel = mongoose.model("posts", postSchema)

module.exports = postModel;