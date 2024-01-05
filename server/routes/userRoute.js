const express = require('express');
const { getUser, createUser, getOneUser, deleteUser, updateUser } = require('../controllers/userController');

const router = express.Router();

router.get('/user', getUser);
router.get('/user/:id', getOneUser);
router.post('/user', createUser);
router.delete('/user/:id',deleteUser);
router.put('/user/:id',updateUser)
module.exports = router;
