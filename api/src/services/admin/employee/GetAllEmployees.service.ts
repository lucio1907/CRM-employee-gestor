import NotFoundException from "../../../errors/NotFoundException";
import DepartmentsModel from "../../../models/Departments.model";
import EmployeesModel from "../../../models/Employees.model";
import PositionModel from "../../../models/Position.model";
import SupervisorModel from "../../../models/Supervisors.model";

class GetAllEmployeeService {
  private collection;
  constructor() {
    this.collection = EmployeesModel;
  }

  public getAll = async () => {
    const employees = await this.collection.findAll({
      attributes: {
        exclude: ["department_id", "position_id", "supervisor_id"],
      },
      include: [
        {
          model: DepartmentsModel,
          as: "department",
        },
        {
          model: PositionModel,
          as: "position",
        },
        {
          model: SupervisorModel,
          as: "supervisor",
        },
      ],
    });

    if (employees.length === 0) throw new NotFoundException("No employees");

    return employees;
  };
}

const getAllEmployeeService = new GetAllEmployeeService();
export default getAllEmployeeService;
