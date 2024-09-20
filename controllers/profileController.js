const Profile = require("../models/Profile"); // Assuming the model file is in models folder

// Create Profile
exports.createProfile = async (req, res) => {
    const { firstname, lastname, email, bio, location, website } = req.body;
    
    try {
        let profile = new Profile({
            user: req.user.id, // Assuming you have user authentication and can access req.user
            firstname,
            lastname,
            email,
            bio,
            location,
            website,
            image: req.file ? req.file.path : null // File path from multer upload
        });

        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};


// Get profile by ID or user ID (as an example)
exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userId }).populate(
      "user",
      ["name", "email"]
    );

    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }

    // If an image exists, construct the absolute URL
    if (profile.image) {
      const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
        profile.image
      }`;
      profile.image = imageUrl; // Overwrite image field with absolute URL
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};




// Update Profile
exports.updateProfile = async (req, res) => {
  const { firstname, lastname, email, bio, location, website } = req.body;

  const profileFields = {
    firstname,
    lastname,
    email,
    bio,
    location,
    website,
    image: req.file ? req.file.path : undefined, // Only update image if provided
  };

  try {
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Delete Profile
exports.deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndDelete({ user: req.user.id });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
