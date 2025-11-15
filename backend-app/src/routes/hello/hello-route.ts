import express,{ Request, Response }  from 'express';
import HelloWorldController from "../../controller/hello/hello-world-controller.ts";

const HelloWorldRouter = express.Router();

HelloWorldRouter.get("/", HelloWorldController.hello);

HelloWorldRouter.use((req: Request, res: Response) => {
    console.log("Hello world controller called", req.url);
});

export default HelloWorldRouter;