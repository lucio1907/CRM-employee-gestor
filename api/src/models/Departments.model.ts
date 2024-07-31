import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import EmployeesModel from "./Employees.model";

const DepartmentsModel = sequelize.define(
  "departments",
  {
    department_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "No description yet",
    },
  },
  {
    timestamps: false,
  }
);

// DepartmentsModel.hasMany(EmployeesModel, { foreignKey: 'department_id' })

export default DepartmentsModel;