const express = require('express');
const router = express.Router();
const { patientRegister, doctorRegister,doctorLogin, patientLogin } = require('../controllers/auth');

router.post('/register/patient', patientRegister).post('/register/doctor', doctorRegister).post('/login/doctor',doctorLogin).post('/login/patinet',patientLogin);

module.exports = router;
