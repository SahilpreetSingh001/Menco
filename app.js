import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Student } from './models/student.model.js';
import { Mentor } from './models/mentor.model.js'; // Assuming you have a Mentor model

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Student Signup Route
app.post('/signup', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Check if student already exists
  const existingStudent = await Student.findOne({ email });
  if (existingStudent) {
    return res.status(400).json({ message: "Student already exists" });
  }

  // Validate if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    
    const createStudent = await Student.create({
      name,
      email,
      password, 
    });

    const studentCreated = await Student.findById(createStudent._id).select("-password");

    if (!studentCreated) {
      return res.status(400).json({ message: "Some error occurred" });
    }

    res.status(201).json({ message: "Student created", data: studentCreated, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the plaintext password directly
    if (student.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Successful login
    return res.status(200).json({ message: 'Login successful', user: student.email });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Mentor Signup Route
app.post('/mentorsignup', async (req, res) => {
  const { name, email, qualification, category, password, description } = req.body;
  console.log('Received mentor signup data:', { name, email, qualification, category, password, description });

  try {
    // Check if mentor already exists
    const existingMentor = await Mentor.findOne({ email });
    if (existingMentor) {
      return res.status(400).json({ message: 'Mentor already exists' });
    }

    // Create new mentor without hashing the password
    const newMentor = await Mentor.create({
      name,
      email,
      qualification,
      category,
      password, // Store plain text password (not recommended for production)
      description,
    });

    res.status(201).json({ message: 'Mentor created', mentor: newMentor });
  } catch (error) {
    console.error('Error during mentor signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



export default app;


// app.post('/mentorsignup', (req, res) => {
//   const { name, email, qualification, category, password, description } = req.body;
//   console.log('Received mentor signup data:', { name, email, qualification, category, password, description });

//   res.status(200).json({ message: 'Signup data received successfully!' });
// });