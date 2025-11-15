import { Request, Response } from "express";
import HelloWorldInterface from "../../interface/hello/IHelloWorld.ts";

const HelloWorldController = {
    hello: (req: Request, res: Response) =>{
        console.log("checkpoint");
        const rawQueryName = req.query?.name;    
        const nameStr = Array.isArray(rawQueryName) ? rawQueryName[0] : rawQueryName ?? "";

        const reqQuery: HelloWorldInterface = {
            name: nameStr+'',
        }

        const name = reqQuery.name.trim();

        if(name.length) return res.status(200).send(`Hello ${name}!`);
        else return res.status(200).send("Hello World!");
    }
}

export default HelloWorldController;