
import express from "express";
import { loginUser, registerUser } from "../controller/user.controller.js";
import { validate } from "../utils/Validate.js";
import { userRegisterValidationRules } from "../utils/UserRegisterValidation.js";
import { userLoginValidationRules } from "../utils/UserloginValidation.js";
const router = express.Router();


router.post('/register', userRegisterValidationRules(), validate, registerUser);
router.post('/login', userLoginValidationRules(), validate, loginUser);


export default router;
