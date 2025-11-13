import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import LoginService from '../../service/auth/login-service.ts';

const LoginController = {
    userLogin: async (req: Request, res: Response) => {
        const { email, password }: { email: string; password: string } = req.body;

        if (email.length === 0 || password.length === 0) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }   
        try{
            await LoginService.login(req.body);
        } catch(error){
            console.log("LoginController error:", error);
                return res.status(500).send({
                message:"internal server error ata, boss",
            }
        );
        }
        
        return res.status(200).send({
                message:"ok ka, boss",
            }
        );
    }
}

export default LoginController;