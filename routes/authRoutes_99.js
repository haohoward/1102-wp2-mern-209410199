import express from 'express';
const router = express.Router();
import {
  register_99,
  login_99,
  updateUser_99,
} from '../controller/authController_99.js';

router.route('/register_99').post(register_99);
router.route('/login_99').post(login_99);
router.route('/updateUser_99').patch(updateUser_99);

export default router;
