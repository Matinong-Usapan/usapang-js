import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const RegistrationController = await {
    register: async (req: Request, res: Response) =>{
        // height, weight, DOB, activity level
        const {height, weight, dob, activityLevel} = req.body;
        
    }
}

export default RegistrationController;