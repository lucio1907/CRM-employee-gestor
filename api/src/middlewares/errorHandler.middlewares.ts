import { NextFunction, Request, Response } from "express";
import BadRequestException from "../errors/BadRequestException";
import NotFoundException from "../errors/NotFoundException";
import ServerErrorException from "../errors/ServerErrorException";

const errorHandler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof BadRequestException) res.status(400).json({ message: err.message, status: 'Bad Request', code: 1 });
    if (err instanceof NotFoundException) res.status(404).json({ message: err.message, status: 'Not Found', code: 1 });
    if (err instanceof ServerErrorException) res.status(500).json({ message: err.message, status: 'Internal Server Error', code: 1 });
};

export default errorHandler;