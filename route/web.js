const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/users')

router.get('/',user_controller.getalldoc)
router.post('/',user_controller.createUsers)
router.post('/delete/:id',user_controller.deleteUsers)
//not needed
router.get('/edit/:id',user_controller.editUsers)
router.post('/update/:id',user_controller.updateUsers)

module.exports = router; 