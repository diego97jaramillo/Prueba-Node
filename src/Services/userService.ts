import { inject, injectable } from "tsyringe";
import { UserRepository } from "../Controllers/userController";
import { User } from "../Models/user";

@injectable
export default class UserService {
    constructor(@inject(UserRepository) private userRepository: UserRepository) {}

    async createUser(user: Partial<User>) {
        return this.userRepository.create(user);
    }
}