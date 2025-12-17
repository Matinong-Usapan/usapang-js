import { Response } from 'express';
import ClientError from '../errors/ClientError.ts';
import ServerError from '../errors/ServerError.ts';
import AppError from '../errors/AppError.ts';

const errorHandler = (err: Error, res: Response) => {
    console.error(err);

    if (err instanceof AppError) {
        console.info(err.request?.body);
        return res.status(err.statusCode).json({ message: err.message });
    }

    if (err instanceof ClientError) {
        console.info(err.request?.body);
        return res.status(err.statusCode).json({ message: err.message });
    }

    if (err instanceof ServerError) {
        console.info(err.request?.body);
        return res.status(err.statusCode).json({ message: err.message });
    }

    return res.status(500).json({ message: 'Something went wrong' });
};

export default errorHandler;