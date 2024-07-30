import { NextFunction, Request, Response } from "express";

const checkIsSuperadmin = async (req: Request, res: Response, next: NextFunction) => {
    const role = req.headers['role'];

    if (role && role === process.env.ROLE) next();
    else res.status(403).json({ message: 'Forbidden: you have not the permissions to create a new admin', status: 'Forbidden', code: 1 });
};

export default checkIsSuperadmin;