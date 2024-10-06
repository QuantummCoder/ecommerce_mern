import express from 'express';
import {forgotPasswordController, registerController} from '../controllers/authController.js'
import { loginController, testController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

//routing
//register || POST
router.post('/register', registerController);

//login || POST
router.post('/login', loginController);

//forgot password || POST
router.post('/forgot-password', forgotPasswordController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

//protected user route
router.get('/user-auth', requireSignIn, (req,res) => {
    res.status(200).send({ ok:true });
})

//protected admin route
router.get('/admin-auth', requireSignIn, isAdmin, (req,res) => {
    res.status(200).send({ ok:true });
})

export default router;