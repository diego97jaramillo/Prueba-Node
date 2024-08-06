import { Request, Response } from "express";
import { container } from "tsyringe";
import UserService from "../Services/userService";
import CartService from "../Services/cartService";



export default class UserController {
    static async createUser(req: Request, res: Response ) {
        try {
            const userService = container.resolve(UserService);
            const cartService = container.resolve(CartService)
            let { password, email, roleId } = req.body
            roleId = parseInt(roleId) 
            password = await userService.encryptPwd(password)
            const userCreated = await userService.createUser({ email, password, roleId});
            cartService.createCart(userCreated?.id as number)
            res.status(200).json({userCreated})
        } catch(err) {
            console.error(err)
            res.status(400).json({message: err})
        }
    }

    static async getAllUsers(_: Request, res: Response) {
        try {
            const userService = container.resolve(UserService);
            const users = await userService.getAll()
            res.status(200).json({status: 200, Users: users})
        } catch(err) {
            throw new Error("something is went wrong during the process")
        }
    }

    static async updateUser(req:Request, res: Response) {
        try {
            let user = req.body
            let {id} = req.params
            const userService = container.resolve(UserService);
            const userCreated = await userService.updateUser(parseInt(id), user)
            res.status(200).json({ status: 200, message: userCreated})
        } catch (err) {
            console.error(err)
        }

    }

    static async deleteUser(req: Request, res: Response) { 
        try { 
            let {id} = req.params
            const userService = container.resolve(UserService);
            const user = await userService.deleteUser(parseInt(id))
            res.status(200).json({ status: 200, message: user})
        } catch (err) {
            console.error(err)
        }
    }
}