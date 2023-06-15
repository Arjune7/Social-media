const router = require('express').Router();
import { register, registerAdmin, changePassword, login, adminLogin, logout, generateAccessToken } from '../controllers/authCtrl';
import auth from '../middleware/auth';


router.post('/register', register);
router.post("/register_admin", registerAdmin);
router.post("/changePassword", auth,  changePassword);


router.post("/login", login);
router.post("/admin_login", adminLogin);


router.post("/logout", logout);


router.post("/refresh_token", generateAccessToken);


export default router;