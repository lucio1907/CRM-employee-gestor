import { compare, hash } from "bcrypt";

export const encrypt = async (password: string): Promise<string> => {
    const hashPassword = await hash(password, 8);
    return hashPassword;
};

export const checkPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    const isOk = await compare(password, hashedPassword);
    return isOk;
};