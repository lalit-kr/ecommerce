const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, "passwordKey").toString(),
  });
  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(201).json("User Successfully Registered!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(user.password, "passwordKey");
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(401).json("Wrong Credentials!");

    const accessToken=jwt.sign({
        id:user._id,
        isAdmin:user.isAdmin
    },"jwtSecretKey",{expiresIn:"3d"})
    const { password, ...others } = user._doc;
    res.status(200).json({...others,accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
