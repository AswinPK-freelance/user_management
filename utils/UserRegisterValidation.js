// utils/saleValidation.js

import { body } from 'express-validator';

export const userRegisterValidationRules = () => {
    return [
        body('name')
            .trim()
            .notEmpty()
            .withMessage('Name is required'),
        body('email')
            .trim()
            .notEmpty()
            .withMessage('Email is required'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('Password is required'),
        body('profileImage')
            .trim()
            .notEmpty()
            .withMessage('Profile Image is required'),
    ];
};
