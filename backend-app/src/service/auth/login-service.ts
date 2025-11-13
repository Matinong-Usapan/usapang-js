import type LoginInterface from "../../interface/auth/iLogin.ts";

const LoginService = {
    login: async (params: LoginInterface)=>{
        const {email, password} = params;
        // db call
        console.log(`email: ${email} password ${password}`);
    }
}

export default LoginService;