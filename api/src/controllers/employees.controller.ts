import { Request, Response, NextFunction } from "express";
import createEmployeeService from "../services/admin/employee/CreateEmployee.service";
import getAllEmployeeService from "../services/admin/employee/GetAllEmployees.service";
import getSpecificEmployeeService from "../services/admin/employee/GetSpecificEmployee.service";

export const createEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newEmployee = await createEmployeeService.create(req.body);
        return res.status(201).json({ message: 'New employee created', newEmployee, status: 'Created', code: 0 });
    } catch (error) {                        
        next(error);
    }
};

export const getAllEmployees = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employees = await getAllEmployeeService.getAll();
        return res.json({ message: 'Done', employees, status: 'Ok', code: 0 });
    } catch (error) {        
        next(error);
    }
};

export const getSpecificEmployee = async (req: Request, res: Response, next: NextFunction) => {
    const { name, lastname } = req.params;
    
    try {
        const employee = await getSpecificEmployeeService.get(name, lastname);
        return res.json({ message: 'Done', employeeInfo: employee, status: 'Ok', code: 0 });    
    } catch (error) {                
        next(error);
    }
};