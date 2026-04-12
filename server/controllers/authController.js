import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashPassword });
    return res
      .status(200)
      .json({ message: "user created successfully.", name: newUser.name });
  } catch (err) {
    console.error(err);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "❗Invalid credentials" });
    }
    const matched = await bcrypt.compare(password, user.password);
    if (matched) {
      const token = generateToken(user._id);
      console.log(token)
      return res.status(200).json({ token, name: user.name });
    } else {
      return res.status(401).json({ message: "❗Password did't match" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
