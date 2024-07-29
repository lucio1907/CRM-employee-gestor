import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.config";

const SuperAdminModel = sequelize.define('superadmin', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'superadmin'
    }
});

export default SuperAdminModel;