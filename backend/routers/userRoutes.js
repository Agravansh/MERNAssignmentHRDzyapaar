const express= require('express');
const router = express.Router();
const userController= require('../controllers/userController');

router.post('/register',userController.registerUser);
router.get('/users',userController.viewUsers);
router.put('/users/:userId',userController.updateUser);
router.delete('/users/:userId',userController.deleteUser);

module.exports= router;