import { NextFunction, Request, Response } from "express";

const createSuperAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const superAdminHeader = req.headers['x-superadmin-token'];

    if (superAdminHeader && superAdminHeader === process.env.SUPERADMIN_TOKEN) next();
    else res.status(403).json({ message: 'Forbidden: invalid superadmin token', status: 'Forbidden', code: 1 });
};

export default createSuperAdminMiddleware;