import { injectable } from "tsyringe";
import { User } from "../Models/user";


@injectable()
export default class UserRepository {

    async create(user: Partial<User>) {
        try {
            return await User.create(user)
        } catch (err) { 
            console.error(err)
        }
    }

    async findAll() {
        try {
            return await User.findAll()
        } catch(err) {
            throw new Error('something is wrong in the model, could get the users')
        }
    }

    async update(id:number, userInput: User) {
        try {
            const user: User |  null = await User.findByPk(id)
            if(!user) {
                return 
            }
            user.email = userInput.email
            user.roleId = userInput.roleId
            user.save()
            return user
        } catch(err) {
            console.error(err);            
        }
    }

    async delete(id: number) { 
        try {
            return User.destroy({
                where: { id },
              });
        } catch (err) { 
            console.error(err)
        }
    }
}