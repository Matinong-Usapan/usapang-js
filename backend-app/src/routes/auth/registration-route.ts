import express,{ Request, Response }  from 'express';
import RegistrationController from '../../controller/auth/registration-controller.ts';

const RegistrationRouter = express.Router();

RegistrationRouter.post('/register', RegistrationController.register);

RegistrationRouter.use((req: Request, res: Response) => {
  console.log("404 not found", req.url);
  res.send("<h1>404</h1>");
});

export default RegistrationRouter;