const bcrypt = require("bcrypt");
const UserModel = require("../Models/UserModel");

const Signup = async (req, res) => {
  try {
    const { name, email, password, profileImg, skills, resume } = req.body;

    const checkUser = await UserModel.findOne({ email });
    if (checkUser) {
      return res.status(409).json({
        message: "User already exists, please sign in",
      });
    }

   
    const hashPass = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: hashPass,
      profileImg,
      skills,
      resume,
    });

    await newUser.save();

    res.status(201).json({
      message: "Signup completed successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const checkUser = await UserModel.findOne({ email });
    if (!checkUser) {
      return res.status(404).json({
        message: "User doesn't exist, please sign up",
      });
    }

    const comparePass = await bcrypt.compare(password, checkUser.password);
    if (!comparePass) {
      return res.status(401).json({
        message: "Email or password is incorrect",
      });
    }

    res.status(200).json({
      message: "Signin completed successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { Signup, Signin };
