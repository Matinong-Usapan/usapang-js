import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import LoginService from '../../service/auth/login-service.ts';
import LoginInterface from '../../interface/auth/iLogin.ts';

const LoginController = {
    userLogin: async (req: Request, res: Response) => {

        const reqBody: LoginInterface = {
            email: req.body?.email || '',
            password: req.body?.password || '', 
        };

        const { email, password } = reqBody;
        
        if (!email.length || !password.length) 
            return res.status(400).json({ message: 'Email and password are required.' });
        
        try{
            await LoginService.login(reqBody);
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