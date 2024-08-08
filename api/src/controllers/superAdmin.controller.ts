import { NextFunction, Request, Response } from "express";
import createNewSuperAdmin from "../services/superadmin/CreateSuperAdmin.service";
import createNewAdmin from "../services/superadmin/CreateNewAdmin.service";
import superAdminLogin from "../services/superadmin/SuperAdminLogin.service";
import deleteAdminService from "../services/superadmin/DeleteAdmin.service";
import createDepartmentService from "../services/superadmin/departments/CreateDepartments.service";
import createSupervisorService from "../services/superadmin/supervisors/CreateSupervisor.service";
import createPositionService from "../services/superadmin/positions/CreatePosition.service";
import getAdminsService from "../services/superadmin/GetAdminService.service";
import getAdminByUsernameService from "../services/superadmin/GetAdminByUsername.service";

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

export const superadminLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const loginInfo = await superAdminLogin.login(req.body);
        return res.json({ message: 'Logged in', loginInfo, status: 'Ok', code: 0 });
    } catch (error) {
        next(error);
    }
};

export const deleteAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const adminDeleted = await deleteAdminService.delete(req.body.username);
        return res.json({ message: 'Admin removed successfully', adminDeleted, status: 'Ok', code: 0 });
    } catch (error) {
        next(error);
    }
};

export const createDepartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newDepartment = await createDepartmentService.create(req.body);
        return res.status(201).json({ message: 'New department created', newDepartment, status: 'Created', code: 0 });
    } catch (error) {
        next(error);
    }
};

export const createSupervisor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newSupervisor = await createSupervisorService.create(req.body);
        return res.status(201).json({ message: 'New supervisor created', newSupervisor, status: 'Created', code: 0 });
    } catch (error) {
        next(error);
    }
};

export const createPosition = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newPosition = await createPositionService.create(req.body);
        return res.status(201).json({ message: 'New position created', newPosition, status: 'Created', code: 0 });
    } catch (error) {        
        next(error);
    }
};

export const getAdmins = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const admins = await getAdminsService.get();
        return res.json({ message: 'Done', admins, status: 'Ok', code: 0 });
    } catch (error) {
        next(error);
    }
};

export const getAdminByUsername = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;
    try {
        const admin = await getAdminByUsernameService.get(username);
        return res.json({ message: 'Done', admin, status: 'Ok', code: 0 });
    } catch (error) {
        next(error);
    }
};