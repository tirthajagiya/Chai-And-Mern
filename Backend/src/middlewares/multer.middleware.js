//store file(video,image,audio) in 2 step
//1)first store in localSystem
//2)then from localSystem to cloudinary (then after file delete from localStorage using fs module)

//this is step-1 | Step-2 in Utils Clodinary

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});