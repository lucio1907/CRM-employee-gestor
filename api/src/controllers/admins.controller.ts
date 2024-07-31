import { NextFunction, Request, Response } from "express";
import adminLoginService from "../services/admin/AdminLogin.service";
import createEmployeeService from "../services/admin/employee/CreateEmployee.service";
import getAllEmployeeService from "../services/admin/employee/GetAllEmployees.service";

export const adminLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const adminLogged = await adminLoginService.login(req.body);
        return res.json({ message: 'Logged in', adminLogged, status: 'Ok', code: 0 });
    } catch (error) {
        next(error);
    }
};

export const createEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newEmployee = await createEmployeeService.create(req.body);
        return res.status(201).json({ message: 'New employee created', newEmployee, status: req.statusMessage, code: 0 });
    } catch (error) {        
        next(error);
    }
};

export const getAllEmployees = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employees = await getAllEmployeeService.getAll();
        return res.json({ message: 'Done', employees, status: 'Ok', code: 0 });
    } catch (error) {
        console.log(error);
        
        next(error);
    }
};