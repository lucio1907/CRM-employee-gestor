import NotFoundException from "../../../errors/NotFoundException";
import DepartmentsModel from "../../../models/Departments.model";
import EmployeesModel from "../../../models/Employees.model";
import PositionModel from "../../../models/Position.model";
import SupervisorModel from "../../../models/Supervisors.model";
import capitalizeText from "../../../utils/capitalizeText.utils";

class GetSpecificEmployeeService {
  private collection;
  constructor() {
    this.collection = EmployeesModel;
  }

  public get = async (name: string, lastname: string) => {
    const capitalizeName = capitalizeText(name);
    const capitalizeLastname = capitalizeText(lastname);

    const employee = await this.collection.findOne({
      where: { name: capitalizeName, lastname: capitalizeLastname },
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

    if (!employee) throw new NotFoundException("Employee not found");

    // Verifica que tenga los roles asignados, sino que le ponga como no asignado
    const employeeJSON = employee.toJSON();
    const finalEmployee = {
      ...employeeJSON,
      department: employeeJSON.department || "Not assigned",
      position: employeeJSON.position || "Not assigned",
      supervisor: employeeJSON.supervisor || "Not assigned",
    };

    return finalEmployee;
  };
}

const getSpecificEmployeeService = new GetSpecificEmployeeService();
export default getSpecificEmployeeService;
