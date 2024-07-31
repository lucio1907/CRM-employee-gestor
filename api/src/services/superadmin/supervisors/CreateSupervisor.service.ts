import BadRequestException from "../../../errors/BadRequestException";
import SupervisorModel from "../../../models/Supervisors.model";
import { SupervisorTypes } from "../../../types/types";
import { v4 as uuid } from "uuid";

class CreateSupervisorService {
    private collection;
    constructor() {
        this.collection = SupervisorModel;
    }

    private checkSupervisor = async (email: string) => {
        const supervisor = await this.collection.findOne({ where: { email } });
        return supervisor;
    };

    public create = async (body: SupervisorTypes) => {
        const { name, lastname, email } = body;

        if ([name, lastname, email].includes('')) throw new BadRequestException(`Fields (name, lastname, email) cannot be empty`);

        const isSupervisor = await this.checkSupervisor(email);
        if (isSupervisor) throw new BadRequestException(`${email} already exists`);

        const newSupervisor = {
            supervisor_id: uuid(),
            ...body
        };

        await this.collection.create(newSupervisor);
        return newSupervisor;
    };
};

const createSupervisorService = new CreateSupervisorService();
export default createSupervisorService;