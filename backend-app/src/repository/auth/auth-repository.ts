import { DatabaseConnection } from '../../utils/db-connection.ts';
import ClientError from '../../errors/ServerError.ts';

const AuthRepository = {
    verifyCredentials : async (email: string, password: string) => {
        console.log(`email: ${email} password ${password} repository layer`);
        let dbConn;

        try{
            dbConn = await DatabaseConnection.connect();

            const loginDetails = await dbConn.query('SELECT * FROM users WHERE email = $1 and password = $2', [email, password]);

            if (loginDetails.rowCount === 0) throw new ClientError('No User Found', 404, {email, password} as any);

            return loginDetails.rows[0];
        } catch (error) {
            throw error;
        } finally {
            dbConn?.release();
        }
    }
};

export default AuthRepository;