
import { body } from 'express-validator';

export const grevienceValidationRules = () => {
    return [

        body('title')
            .trim()
            .notEmpty()
            .withMessage('Title is required'),
        body('description')
            .trim()
            .notEmpty()
            .withMessage('Description is required'),
        body('type')
            .trim()
            .notEmpty()
            .withMessage('Type is required'),
        body('user')
            .trim()
            .notEmpty()
            .withMessage('User is required'),

    ];
};
