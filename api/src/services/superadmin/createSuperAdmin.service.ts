import SuperAdminModel from "../../models/SuperAdmin.model";
import { SuperAdminBody } from "../../types/types";
import BadRequestException from "../../errors/BadRequestException";
import { v4 as uuid } from "uuid";
import { encrypt } from "../../utils/bcrypt.utils";

type FinalResponse = {
    username: string;
    role: string;
    createdAt: string;
}

class CreateSuperAdmin {
    private collection;
    constructor () {
        this.collection = SuperAdminModel;
    }

    private checkUsername = async (username: string) => {
        const exists = await this.collection.findOne({ where: { username } });
        return exists;
    };

    create = async (body: SuperAdminBody): Promise<FinalResponse> => {
        const { password, username } = body;

        const usernameChecked = await this.checkUsername(username);

        if (usernameChecked) throw new BadRequestException('Superadmin already exists');
        const hashedPassword = await encrypt(password);

        const newSuperAdmin = {
            id: uuid(),
            username,
            password: hashedPassword
        }

        await this.collection.create(newSuperAdmin);

        const finalResponse: FinalResponse = await this.collection.findOne({ where: { username } }).then((i) => {
            const superadmin = {
                username: i?.dataValues.username,
                role: i?.dataValues.role,
                createdAt: i?.dataValues.createdAt
            }
            return superadmin
        })

        return finalResponse;
    };
};

const createNewSuperAdmin = new CreateSuperAdmin();
export default createNewSuperAdmin;