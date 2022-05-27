import express from 'express';
import { registerUser } from '../controllers/user/registerUserController.js';
import { getUserProfile } from '../controllers/user/userController.js';

const router = express.Router();

router.route('/profile').get(getUserProfile);
router.route('/reg').post(registerUser);

export default router;