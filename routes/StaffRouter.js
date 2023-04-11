const express = require("express")
const router = express.Router()
const staffController = require('../controllers/StaffController')

router.post('/sign-up-staff', staffController.createStaff)
router.post('/sign-in-staff', staffController.loginStaff)
router.put('/update-staff/:id', staffController.updateStaff)
router.delete('/delete-staff/:id', staffController.deleteStaff)
router.get('/getAll-staff', staffController.getAllStaff)
router.get('/get-details-staff/:id', staffController.getDetailsStaff)


module.exports = router