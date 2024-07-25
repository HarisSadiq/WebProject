
import bcrypt from 'bcrypt';
import User from '../model/user.js';

export const registerUser = async (req, res) => {
  const { fullName, email, username, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ fullName, email, username, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
    console.log(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
    console.log(user);
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};
