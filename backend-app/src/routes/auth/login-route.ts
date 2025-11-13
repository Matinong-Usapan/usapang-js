import express,{ Request, Response }  from 'express';
import LoginController from '../../controller/auth/login-controller.ts';

const LoginRouter = express.Router();

LoginRouter.post('/login', LoginController.userLogin);

LoginRouter.use((req: Request, res: Response) => {
  console.log("404 not found", req.url);
  res.send("<h1>404</h1>");
});

export default LoginRouter;