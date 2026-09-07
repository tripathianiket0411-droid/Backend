const Imagekit = require("imagekit");

const storageInstance = new Imagekit({
  urlEndpoint: process.env.IK_URL,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

const sendFiles = async (file, fileName) => {



  return await storageInstance.upload({
    file,
    fileName,
    folder: "india-insta",
  })
};

module.exports = sendFiles;
