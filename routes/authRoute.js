import express from "express";
import {registerController , loginController , testController, forgotPasswordController, updateProfileController, getOrdersController} from "../controllers/authController.js";

import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
//route object

const router = express.Router()

//routing

//register || Method

router.post('/register' , registerController);

router.post('/login' , loginController);

//forgot password
router.post('/forgot-password' , forgotPasswordController);

//test Route
router.get('/test' ,requiredSignIn ,isAdmin, testController)

//protected route auth
router.get('/user-auth' , requiredSignIn , (req, res) =>{
    res.status(200).send({ok:true});
} );

router.get('/admin-auth' , requiredSignIn ,isAdmin ,  (req, res) =>{
    res.status(200).send({ok:true});
} );

//update profile
router.put('/profile' , requiredSignIn , updateProfileController);


//order
router.get('/orders', requiredSignIn, getOrdersController);

export default router
