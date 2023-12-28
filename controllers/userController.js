import bcrypt from "bcrypt"
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from '../modals/userModal.js';


dotenv.config();
////////////*SECRET_KEY*/////////////////




///// Sign up , login ,log out  

const signUp = async (req, res) => {
  const SECRET_KEY = process.env.SECRET_KEY
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Create a JWT token

    const token = jwt.sign({ userId: newUser._id }, SECRET_KEY, { expiresIn: '1h' });

    /////////////////////////////////////////////////////////////////////////////////

    const UserSend = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    }

    res.status(201).json({
      data: UserSend,
      token: token,
      message: 'User created',
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const login = async (req, res) => {
  const SECRET_KEY = process.env.SECRET_KEY
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }



    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });


    const UserSendIt = {
      id: req.body._id,
      email: req.body.email,
      password: req.body.password,

    }

    res.status(201).json({
      data: UserSendIt,
      token: token,
      message: 'Login successful',
    });

    //res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


//Log Out

const LogOut = asyncHandler(async (req, res) => {
  res.cookie("token", '')

})

export { signUp, login, LogOut };