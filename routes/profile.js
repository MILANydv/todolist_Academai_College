const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController"); // Adjust the path to your controllers
const upload = require("../middlewares/fileUpload"); // Multer middleware for image uploads
const { authenticateToken } = require("../middlewares/auth"); // Assuming you have authentication middleware

// Create profile
router.post(
  "/create",
authenticateToken,
  upload.single("image"),
  profileController.createProfile
);

// Get profile by user ID
router.get("/:userId",authenticateToken, profileController.getProfile);

// Update profile
router.put(
  "/update",
authenticateToken,
  upload.single("image"),
  profileController.updateProfile
);

// Delete profile
router.delete("/delete",authenticateToken, profileController.deleteProfile);

module.exports = router;
