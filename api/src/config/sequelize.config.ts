import { Sequelize } from "sequelize";
import configServer from "./configServer.config";

export const sequelize = new Sequelize(
  configServer.database.db,
  configServer.database.username,
  configServer.database.password,
  {
    host: configServer.database.host,
    dialect: "postgres",
    port: parseInt(configServer.database.port),
    logging: false
  }
);
