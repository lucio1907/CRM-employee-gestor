import NotFoundException from "../../errors/NotFoundException";
import AdminsModel from "../../models/Admins.model";

class DeleteAdminService {
  private collection;
  constructor() {
    this.collection = AdminsModel;
  }

  private checkAdmin = async (username: string) => {
    const admin = await this.collection.findOne({ where: { username } });
    return admin;
  };

  public delete = async (username: string) => {
    const getAdmin = await this.checkAdmin(username);

    if (!getAdmin) throw new NotFoundException("Admin not found");

    await this.collection.destroy({ where: { id: getAdmin.dataValues.id } });

    return getAdmin.dataValues.username;
  };
}

const deleteAdminService = new DeleteAdminService();
export default deleteAdminService;
