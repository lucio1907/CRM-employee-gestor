import BadRequestException from "../../errors/BadRequestException";
import AdminsModel from "../../models/Admins.model";
import { AdminBody } from "../../types/types";
import { encrypt } from "../../utils/bcrypt.utils";
import { v4 as uuid } from "uuid";

type FinalResponse = {
    username: string,
    role: string,
    createdAt: string
}

class CreateNewAdmin {
    private collection;
    constructor () {
        this.collection = AdminsModel;
    }

    private checkAdmin = async (username: string) => {
        const adminExists = await this.collection.findOne({ where: { username } });
        return adminExists;
    };

    public create = async (body: AdminBody): Promise<FinalResponse> => {
        const { id, password, username } = body;

        const checkAdmin = await this.checkAdmin(username);

        if (checkAdmin) throw new BadRequestException('Admin already exists');
        const hashedPassword = await encrypt(password);

        const newAdmin = {
            id: uuid(),
            username,
            password: hashedPassword,
        };

        await this.collection.create(newAdmin);

        const finalResponse: FinalResponse = await this.collection.findOne({ where: { username } }).then(i => {
            const admin = {
                username: i?.dataValues.username,
                role: i?.dataValues.role,
                createdAt: i?.dataValues.createdAt
            }
            return admin;
        })

        return finalResponse;
    };
}

const createNewAdmin = new CreateNewAdmin();
export default createNewAdmin;