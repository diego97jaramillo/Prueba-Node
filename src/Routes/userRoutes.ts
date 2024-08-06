import { Router } from "express";
import UserController from "../Controllers/userController";
export const userRouter = Router()

userRouter.post("/", UserController.createUser)
userRouter.get("/", UserController.getAllUsers)
userRouter.put("/:id", UserController.updateUser)
userRouter.delete("/:id", UserController.deleteUser)