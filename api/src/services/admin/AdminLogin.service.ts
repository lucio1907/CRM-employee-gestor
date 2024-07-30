import BadRequestException from "../../errors/BadRequestException";
import NotFoundException from "../../errors/NotFoundException";
import AdminsModel from "../../models/Admins.model";
import { AdminLogin } from "../../types/types";
import { checkPassword } from "../../utils/bcrypt.utils";
import { generateToken } from "../../utils/jwt.utils";

class AdminLoginService {
    private collection;
    constructor() {
        this.collection = AdminsModel;
    }

    private checkAdmin = async (username: string) => {
        const admin = await this.collection.findOne({ where: { username } });
        return admin;
    };

    public login = async (body: AdminLogin) => {
        const { username, password } = body;

        const admin = await this.checkAdmin(username);
        if (!admin) throw new NotFoundException('Incorrect username');

        const hashedPassword = await admin.dataValues.password;
        const passwordDecrypted = await checkPassword(password, hashedPassword);

        const token = await generateToken(admin.dataValues.id);
        
        if (token) {
            const data = {
                admin: {
                    username: admin.dataValues.username,
                    role: admin.dataValues.role,
                    session: 'active'
                },
                access_token: token,
                token_type: 'Bearer'
            }
            
            if (passwordDecrypted) return data
            else throw new BadRequestException('Incorrect password');
        }
    };
};

const adminLoginService = new AdminLoginService();
export default adminLoginService;