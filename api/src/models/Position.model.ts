import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import EmployeesModel from "./Employees.model";

const PositionModel = sequelize.define(
  "positions",
  {
    position_id: {
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
      allowNull: false,
      defaultValue: "No description yet",
    },
    base_salary: {
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    timestamps: false,
  }
);

// PositionModel.hasMany(EmployeesModel, { foreignKey: 'position_id' })

export default PositionModel;