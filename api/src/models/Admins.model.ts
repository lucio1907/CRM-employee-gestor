import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.config";

const AdminsModel = sequelize.define('admins', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'admin'
    }
});

export default AdminsModel;