import BadRequestException from "../../errors/BadRequestException";
import NotFoundException from "../../errors/NotFoundException";
import SuperAdminModel from "../../models/SuperAdmin.model";
import { SuperAdminLoginTypes } from "../../types/types";
import { checkPassword } from "../../utils/bcrypt.utils";
import { generateToken } from "../../utils/jwt.utils";

class SuperAdminLogin {
    private collection;
    constructor () {
        this.collection = SuperAdminModel;
    };

    private findSuperAdmin = async (username: string) => {
        const found = await this.collection.findOne({ where: { username } });
        return found;
    };

    public login = async (body: SuperAdminLoginTypes) => {
        const { username, password } = body;

        const superadmin = await this.findSuperAdmin(username);
        if (!superadmin) throw new NotFoundException('Incorrect username');

        const hashedPassword = superadmin.dataValues.password;
        const passwordDecrypted = await checkPassword(password, hashedPassword);

        const token = await generateToken(superadmin.dataValues.id);
        if (token) {
            const data = {
                superadmin: {
                    username: superadmin.dataValues.username,
                    role: superadmin.dataValues.role,
                    session: 'active'
                },
                access_token: token,
                token_type: 'Bearer'
            };
            
            if (passwordDecrypted) return data;
            else throw new BadRequestException('Incorrect password');
        };
    };
};

const superAdminLogin = new SuperAdminLogin();
export default superAdminLogin;