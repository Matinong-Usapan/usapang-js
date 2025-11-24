import { DatabaseConnection } from '../../utils/db-connection.ts';

const login = async (email: string, password: string) => {
        // db call
        console.log(`email: ${email} password ${password} repository layer`);
        try{
            const dbConn =  await DatabaseConnection.connect();
            const loginDetails = await dbConn.query('SELECT * FROM users WHERE email = $1 and password = $2', [email, password]);
            if (loginDetails.rowCount === 0) throw new Error('No User Found');
        } catch (error) {
            console.error('login-repository', error);
            throw error;
        }
    }

export const LoginRepository =  {
    login,
};