import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import DepartmentsModel from "./Departments.model";
import PositionModel from "./Position.model";
import SupervisorModel from "./Supervisors.model";

const EmployeesModel = sequelize.define(
  "employees",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      defaultValue: "No specified",
    },
    address: {
      type: DataTypes.TEXT,
      defaultValue: "No address",
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "No phone",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hired_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    department_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: DepartmentsModel,
        key: "department_id",
      },
    },
    position_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: PositionModel,
        key: "position_id",
      },
    },
    supervisor_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: SupervisorModel,
        key: "supervisor_id",
      },
    },
  },
  {
    timestamps: false,
  }
);

EmployeesModel.belongsTo(DepartmentsModel, { foreignKey: "department_id" });
EmployeesModel.belongsTo(PositionModel, { foreignKey: "position_id" });
EmployeesModel.belongsTo(SupervisorModel, { foreignKey: "supervisor_id" });

export default EmployeesModel;