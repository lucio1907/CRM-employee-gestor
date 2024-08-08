import BadRequestException from "../../errors/BadRequestException";
import NotFoundException from "../../errors/NotFoundException";
import AdminsModel from "../../models/Admins.model";
import capitalizeText from "../../utils/capitalizeText.utils";

class GetAdminByUsernameService {
  private collection;
  constructor() {
    this.collection = AdminsModel;
  }

  public get = async (username: string) => {
    const capitalizeUsername = capitalizeText(username);
    const admin = await this.collection.findOne({
      where: { username: capitalizeUsername },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (username === "") throw new BadRequestException("Field cannot be empty");
    if (!admin) throw new NotFoundException("Admin not found");

    return admin;
  };
}

const getAdminByUsernameService = new GetAdminByUsernameService();
export default getAdminByUsernameService;
