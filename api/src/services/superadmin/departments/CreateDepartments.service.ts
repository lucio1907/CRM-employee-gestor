import BadRequestException from "../../../errors/BadRequestException";
import DepartmentsModel from "../../../models/Departments.model";
import { DepartmentsTypes } from "../../../types/types";
import { v4 as uuid } from "uuid";

class CreateDepartmentService {
    private collection;
    constructor() {
        this.collection = DepartmentsModel;
    }

    private checkDepartment = async (name: string) => {
        const department = await this.collection.findOne({ where: { name } });
        return department;
    };

    public create = async (body: DepartmentsTypes) => {
        const { name, description } = body;
        const nameToLowerCase = name.toLowerCase();

        if ([name, description].includes('')) throw new BadRequestException('Fields cannot be empty');

        const isDepartment = await this.checkDepartment(nameToLowerCase);
        if (isDepartment) throw new BadRequestException(`${name.toUpperCase()} already exists`);

        const newDepartment = {
            department_id: uuid(),
            name: nameToLowerCase,
            description
        }

        await this.collection.create(newDepartment);

        return newDepartment;
    };
};

const createDepartmentService = new CreateDepartmentService();
export default createDepartmentService;