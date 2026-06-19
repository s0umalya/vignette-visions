import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import {
    validationResult
} from 'express-validator';

export const register = async (req, res) => {

    try {

        const errors =
            validationResult(req);

        if (!errors.isEmpty()) {

            return res.status(400).json({
                errors: errors.array()
            });

        }

        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            gender,
            password
        } = req.body;

        const existingUser = await User.findOne({
            email
        });

        if (existingUser) {

            return res.status(409).json({
                message: 'Email already registered'
            });

        }

        const passwordHash = await bcrypt.hash(
            password,
            10
        );

        const user = await User.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            gender,
            passwordHash
        });

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Internal server error'
        });

    }

};

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(401).json({
                message: 'Invalid email or password'
            });

        }

        const isPasswordValid =
            await bcrypt.compare(
                password,
                user.passwordHash
            );

        if (!isPasswordValid) {

            return res.status(401).json({
                message: 'Invalid email or password'
            });

        }

        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '7d'
            }
        );

        res.status(200).json({
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Internal server error'
        });

    }

};

export const getCurrentUser = async (
    req,
    res
) => {

    try {

        const user = await User.findById(
            req.user.userId
        ).select('-passwordHash');

        if (!user) {

            return res.status(404).json({
                message: 'User not found'
            });

        }

        res.status(200).json(user);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Internal server error'
        });

    }

};