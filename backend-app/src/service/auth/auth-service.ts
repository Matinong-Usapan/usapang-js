import JwtInterface from "../../interface/auth/iJwt.ts";
import type LoginInterface from "../../interface/auth/iLogin.ts";
import AuthRepository from "../../repository/auth/auth-repository.ts";
import jwt from 'jsonwebtoken';

const AuthService = {
    verifyCredentials: async (params: LoginInterface) => {
        const {email, password} = params;
        console.log(`email: ${email}, password: ${password} service layer`);
        
        try{
            return await AuthRepository.verifyCredentials(email, password);
        } catch(error){
            throw error;
        }
    },
     generateToken: async (params: JwtInterface) => {
        const {email, userId, accessTokenSecret, refreshTokenSecret, expirationTime} = params;
        let token = {};

        try{
            const accessToken = jwt.sign({ email, userId }, accessTokenSecret, { expiresIn: '1h' });
            const refreshToken = jwt.sign({ email, userId }, refreshTokenSecret, { expiresIn: '7d' });

            const dateToday = new Date();

            token = {
                accessToken,
                refreshToken,
                iat: dateToday.toISOString(),
                exp: new Date(dateToday.getTime() + expirationTime).toISOString()
            };
        } catch(error){
            throw error;
        }

        return token;
    }
}

export default AuthService;