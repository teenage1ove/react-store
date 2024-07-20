const express = require('express');
const router = express.Router();
const { login, register, current, update } = require('../controllers/users')
const {auth} = require('../middleware/auth')
router.post('/login', login);

router.post('/register', register);

router.get('/current',auth,current);

router.put('/update',auth, update)

module.exports = router;