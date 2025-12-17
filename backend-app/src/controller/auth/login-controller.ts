import { Request, Response } from 'express';
import AuthService from '../../service/auth/auth-service.ts';
import LoginInterface from '../../interface/auth/iLogin.ts';
import { ClientError } from '../../errors/index.ts';
import dotenv from "dotenv";
import errorHandler from '../../middleware/error-handler.ts';
import iUser from '../../interface/auth/iUser.ts';
import jwt from 'jsonwebtoken';

dotenv.config({ path: "./.env" });

const LoginController = {
    userLogin: async (req: Request, res: Response) => {
        let jwtToken: object = {};

        try{
            const reqBody: LoginInterface = {
                email: req.body?.email || '',
                password: req.body?.password || '', 
            };

            const { email, password } = reqBody;
                
            if (!email.trim().length || !password.trim().length) 
                throw new ClientError('Invalid email or password.', 400, req.body);
                
            const jwtUser = { email };
            const dateToday = new Date();
            const expirationTime = Number(process.env.EXPIRATION_TIME);

            const user: iUser = await AuthService.verifyCredentials(reqBody);

            if(user){
                jwtToken = {
                    user: {
                        user_id: user.user_id, 
                        email: user.email
                    },
                    accessToken : jwt.sign(jwtUser, process.env.ACCESS_TOKEN_SECRET || '', { expiresIn: '1h' }),
                    refreshToken : jwt.sign(jwtUser, process.env.REFRESH_TOKEN_SECRET || '', { expiresIn: '7d' }),
                    iat: dateToday.toISOString(),
                    exp: new Date(dateToday.getTime() + expirationTime).toISOString(),
                    roles: [],
                }


            } else 
                throw new ClientError('Incorrect email or password.', 401, req.body);

            return res.status(200).send({
                message:"Login successful",
                data: jwtToken,
            });
        } catch(error){
            errorHandler(error as Error, res);
        }
    }
}

export default LoginController;