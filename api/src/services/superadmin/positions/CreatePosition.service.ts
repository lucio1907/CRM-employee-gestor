import BadRequestException from "../../../errors/BadRequestException";
import PositionModel from "../../../models/Position.model";
import { PositionTypes } from "../../../types/types";
import { v4 as uuid } from "uuid";

class CreatePositionService {
    private collection;
    constructor() {
        this.collection = PositionModel;
    }

    private checkPosition = async (name: string) => {
        const position = await this.collection.findOne({ where: { name } });
        return position;
    };

    public create = async (body: PositionTypes) => {
        const { name, description, base_salary } = body;
        const nameToLower = name.toLowerCase();

        if ([name, base_salary].includes('')) throw new BadRequestException('Fields (name, base salary) cannot be empty');

        const isPosition = await this.checkPosition(nameToLower);
        if (isPosition) throw new BadRequestException(`${name.toUpperCase()} already exists`);

        const newPosition = {
            position_id: uuid(),
            name: nameToLower,
            description,
            base_salary
        };

        await this.collection.create(newPosition);
        return newPosition;
    };
};

const createPositionService = new CreatePositionService();
export default createPositionService;