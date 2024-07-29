import { NextFunction, Request, Response } from "express";
import createNewSuperAdmin from "../services/superadmin/createSuperAdmin.service";
import createNewAdmin from "../services/superadmin/createNewAdmin.service";

export const createSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newSuperAdmin = await createNewSuperAdmin.create(req.body);
        return res.status(201).json({ message: 'New superadmin created', superAdminInfo: newSuperAdmin, status: 'Created', code: 0 });
    } catch (error) {
        next(error);
    }
};

export const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newAdmin = await createNewAdmin.create(req.body);
        return res.status(201).json({ message: 'New admin created', adminInfo: newAdmin, status: 'Created', code: 0 });
    } catch (error) {
        next(error);
    }
};