import { NextFunction, Request, Response } from "express";
import adminLoginService from "../services/admin/AdminLogin.service";
import createEmployeeService from "../services/admin/employee/CreateEmployee.service";
import getAllEmployeeService from "../services/admin/employee/GetAllEmployees.service";
import getSpecificEmployeeService from "../services/admin/employee/GetSpecificEmployee.service";

export const adminLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const adminLogged = await adminLoginService.login(req.body);
        return res.json({ message: 'Logged in', adminLogged, status: 'Ok', code: 0 });
    } catch (error) {
        next(error);
    }
};