const bcrypt = require('bcrypt');
const Doctor = require('../model/Doctor');
const Patient = require('../model/Patient');
const doctorRegister = async (req, res) => {
  try {
    // Extract the data from the request body
    const { name, age, specialization, licenseNumber, email, address, password } = req.body;

    // Check if the email is already registered
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash the password
    const saltRounds = 10; // Number of salt rounds
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    // const hashedPassword = password;

    // Create a new doctor instance
    const newDoctor = new Doctor({
      name,
      age,
      specialization,
      licenseNumber,
      email,
      address,
      password: hashedPassword,
    });


    // Save the new doctor to the database
    await newDoctor.save();

    // Return a success response
    res.status(201).json({ message: 'Doctor registered successfully' ,
  Doctor:newDoctor});
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while registering the doctor',
  msg:error.message });
  }
};


const patientRegister = async (req, res) => {
  try {
    // Extract the data from the request body
    const { name, age, sex, email, address, password } = req.body;


    // Check if the email is already registered
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash the password
    const saltRounds = 10; // Number of salt rounds
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new patient instance
    const newPatient = new Patient({
      name,
      age,
      sex,
      email,
      address,
      password: hashedPassword,
    });

    // Save the new patient to the database
    await newPatient.save();

    // Return a success response
    res.status(201).json({ message: 'Patient registered successfully',Patient:newPatient });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while registering the patient',
  msg:error.message });
  }
};

const doctorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password){
      return res.status(400).json({ error: 'Please provide email and password' });
    }
    // Find the doctor by email
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, doctor.password);

    if (!passwordMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Return a success response
    res.status(200).json({ message: 'Doctor logged in successfully', doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during login', msg: error.message });
  }
};

const patientLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the patient by email
    if(!email || !password){
      return res.status(400).json({ error: 'Please provide email and password' });
    }
    const patient = await Patient.findOne({ email });

    if (!patient) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, patient.password);

    if (!passwordMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Return a success response
    res.status(200).json({ message: 'Patient logged in successfully', patient });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during login', msg: error.message });
  }
};

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).json({ doctors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error fetching doctors', msg: error.message });
  }
};

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find({});
    res.status(200).json({ patients });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error fetching patients', msg: error.message });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.status(200).json({ doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error fetching doctor', msg: error.message });
  }
};

const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json({ patient });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error fetching patient', msg: error.message });
  }
};

module.exports = { doctorRegister, patientRegister, doctorLogin, patientLogin, getAllDoctors, getAllPatients, getDoctorById, getPatientById };


