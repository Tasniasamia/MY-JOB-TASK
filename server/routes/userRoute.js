const express = require('express');
const { getUser, createUser, getOneUser, deleteUser, updateUser, favouriteUsers, generalUsers } = require('../controllers/userController');

const router = express.Router();

router.get('/user', getUser);
router.get('/user/:id', getOneUser);
router.post('/user', createUser);
router.delete('/user/:id',deleteUser);
router.put('/user/:id',updateUser)
router.put('/favourite/:id',favouriteUsers);
router.put('/general/:id',generalUsers)
module.exports = router;
