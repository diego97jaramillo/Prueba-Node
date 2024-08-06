import { inject, injectable } from "tsyringe";
import { User } from "../Models/user";
import bcrypt from "bcrypt";
import UserRepository from "../Repository/userRepository";

@injectable()
export default class UserService {
    constructor(@inject(UserRepository) private userRepository: UserRepository) { }

    async createUser(user: Partial<User>) {
        try {
            return this.userRepository.create(user);
        } catch( err ) {
            console.error("esto esta malo: ", err);
            throw new Error("no esta en el servicio")
        }
    }

    async encryptPwd(password: string): Promise<string> {
        const encryptedPwd = await bcrypt.hash(password, 10)
        return encryptedPwd
    }

    async getAll(): Promise<User[]> {
        try {
            return this.userRepository.findAll()
        } catch(err) {
            console.log(err);
            throw new Error("something is wrong in the service")
        }
    }

    async updateUser(id: number, user: User) {
        try {
            console.log(typeof id, id , user);
            
            return this.userRepository.update(id, user)
        }catch(err) {
            throw new Error("something is broken in the services")
        }
    }

    async deleteUser(id: number) {
        try {
            return this.userRepository.delete(id);
        } catch(err) {
            console.error(err)
        }
    }
}