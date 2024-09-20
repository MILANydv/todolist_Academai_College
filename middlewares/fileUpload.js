const multer = require("multer");
const path = require("path");

// Multer configuration for storing images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    // Extract the original name (without extension) and extension
    const originalName = path.parse(file.originalname).name; // Get the original file name
    const extension = path.extname(file.originalname); // Get the file extension (e.g. .jpg, .png)
    const timestamp = Date.now(); // Current timestamp

    // Create the filename as originalFilename-date.extension
    const newFilename = `${originalName}-${timestamp}${extension}`;
    cb(null, newFilename);
  },
});

// File filter for images only
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only jpeg, png, jpg formats are allowed"), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB size limit
  },
  fileFilter: fileFilter,
});

module.exports = upload;
