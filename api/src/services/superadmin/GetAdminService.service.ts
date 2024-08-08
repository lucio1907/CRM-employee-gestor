import NotFoundException from "../../errors/NotFoundException";
import AdminsModel from "../../models/Admins.model";

class GetAdminsService {
  private collection;
  constructor() {
    this.collection = AdminsModel;
  }

  public get = async () => {
    const admins = await this.collection.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (admins.length === 0) throw new NotFoundException("No admins found");

    return admins;
  };
}

const getAdminsService = new GetAdminsService();
export default getAdminsService;
