const express = require('express');
const router = express.Router();
const { patientRegister, doctorRegister,doctorLogin, patientLogin,getAllDoctors,getAllPatients,getDoctorById,getPatientById } = require('../controllers/auth');

router.post('/register/patient', patientRegister).post('/register/doctor', doctorRegister).post('/login/doctor',doctorLogin).post('/login/patinet',patientLogin);
router.get('/doctor',getAllDoctors);
router.get('/patient',getAllPatients);
router.get('/doctor/:id',getDoctorById);
router.get('/patient/:id',getPatientById);
module.exports = router;
