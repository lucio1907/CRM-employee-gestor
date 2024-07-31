import EmployeesModel from "../../../models/Employees.model";
import { EmployeesTypes } from "../../../types/types";
import BadRequestException from "../../../errors/BadRequestException";
import { v4 as uuid } from "uuid";

class CreateEmployeeService {
    private collection;
    constructor() {
        this.collection = EmployeesModel;
    };

    private checkEmployee = async (email: string) => {
        const employee = await this.collection.findOne({ where: { email } });
        return employee;
    };

    public create = async (body: EmployeesTypes) => {
        const { name, lastname, email, birth_date } = body;

        if ([name, lastname, email, birth_date].includes('')) throw new BadRequestException('Fiels (name, lastname, email, birth date) cannot be empty');

        const isEmployee = await this.checkEmployee(email);
        if (isEmployee) throw new BadRequestException(`${email} already exists`);

        const newEmployee = {
            id: uuid(),
            ...body
        }

        await this.collection.create(newEmployee);
        return newEmployee;
    };
};

const createEmployeeService = new CreateEmployeeService();
export default createEmployeeService;