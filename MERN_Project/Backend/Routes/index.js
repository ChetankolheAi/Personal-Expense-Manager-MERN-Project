import express from 'express'
import dotenv from 'dotenv';
import {signup ,Login} from '../Controller/taskController.js';

dotenv.config();
const router = express.Router();


router.post('/signup',signup)
router.post('/login', Login)

export default router;





// 201 for successful signup
// 400 if the user already exists
// 500 for server error