
import { body } from 'express-validator';

export const userLoginValidationRules = () => {
    return [

        body('email')
            .trim()
            .notEmpty()
            .withMessage('Email is required'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('Password is required'),

    ];
};
