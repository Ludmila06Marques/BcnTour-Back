import { Request , Response } from "express"
import * as userService from "../services/userService.js"

import { CreateUserType , CreateUserTypeLogin } from "../type/userType.js";

export async function login(req:Request ,res:Response){
  const user:CreateUserTypeLogin = req.body;
  const response = await userService.loginUser(user);
  res.send(response).status(200);
}

export async function signup(req:Request ,res:Response){
  const user:CreateUserType = req.body;
  await userService.createUser(user);
  res.sendStatus(201);
}

export async function geById(req:Request ,res:Response){
  const id= parseInt(req.params.id)

  const result= await userService.findUserById(id)

  res.send(result).status(200)//sucess
}

export async function deleteUser(req:Request ,res:Response){
  const id= parseInt(req.params.id)
  const result= await userService.deleteUser(id)

  res.sendStatus(200)//sucess
}