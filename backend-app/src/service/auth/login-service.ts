import type LoginInterface from "../../interface/auth/iLogin.ts";
import { LoginRepository } from "../../repository/auth/login-repository.ts";

const LoginService = {
    login: async (params: LoginInterface)=>{
        const {email, password} = params;
        console.log(`email: ${email} password ${password} service layer`);
        if (email.length === 0 || password.length === 0) throw new Error('Email and password are required.');
        try{
            await LoginRepository.login(email, password);
        } catch(error){
            console.log("LoginService error:", error);
            throw error;    
        }
    }
}

export default LoginService;