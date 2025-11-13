import express from 'express';
import type { Express, Request, Response } from 'express';
import LoginRouter from './routes/auth/login-route.ts';

const app: Express = express();
const port: number = 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/test", (_req: Request, res: Response): void => {
  console.log("Server is running");
  res.send("<p>It Works!</p>");
});

app.use("/auth", LoginRouter);

export default app;