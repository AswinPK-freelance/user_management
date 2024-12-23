
import express from "express";
import { createGrievance, deleteGrievances, fetchAllGrievances, updateGrievance } from "../controller/grievance.controller.js";
import { grevienceValidationRules } from "../utils/GrevienceValidation.js";
import { validate } from "../utils/Validate.js";
const router = express.Router();


router.post('/', grevienceValidationRules(), validate, createGrievance);
router.get('/', fetchAllGrievances);
router.delete('/', deleteGrievances);
router.patch('/:id', updateGrievance);


export default router;
