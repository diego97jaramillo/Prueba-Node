import { Request, Response } from "express";
import { container } from "tsyringe";


export class UserRepository {
    static async createUser(req: Request, res: Response ) {
        const userService = container.resolve(UserService);
        let {name, password, email, roleId } = req.body 
        password = await userService.encryptPwd(password)
        const userCreated = await userService.createUser({name, email, password, roleId});
        res.json({userCreated})
    }
}