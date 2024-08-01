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

    // Verifica que tenga los roles asignados, sino que le ponga como no asignado
    const formatedEmployees = employees.map(employee => {
      const employeeJSON = employee.toJSON();
      return {
        ...employeeJSON,
        department: employeeJSON.department || 'Not assigned',
        position: employeeJSON.position || 'Not assigned',
        supervisor: employeeJSON.supervisor || 'Not assigned'
      }
    })

    return formatedEmployees;
  };
}

const getAllEmployeeService = new GetAllEmployeeService();
export default getAllEmployeeService;
