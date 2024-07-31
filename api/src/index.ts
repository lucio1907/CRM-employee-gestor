import app from "./app";
import configServer from "./config/configServer.config";
import { sequelize } from "./config/sequelize.config";

const main = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: false, alter: true });

    const PORT: number = configServer.server.port as number;
    app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
  } catch (error) {
    console.log(error);
    console.log("Unable to connect to the database");
  }
};

main();
