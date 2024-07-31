import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import EmployeesModel from "./Employees.model";

const SupervisorModel = sequelize.define(
  "supervisor",
  {
    supervisor_id: {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "No phone",
    },
  },
  {
    timestamps: false,
  }
);

// SupervisorModel.hasMany(EmployeesModel, { foreignKey: "supervisor_id" });

export default SupervisorModel;