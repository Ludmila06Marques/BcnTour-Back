import { prisma } from "../dbStrategy/db";
import * as userSchema from "../type/userType"


export async function findUserByEmail(email:string){
    return prisma.users.findUnique({where:{email}})
}
export async function findById(id: number) {
  return prisma.users.findUnique({
    where: { id }
  });
}
export async function insertUser(user:userSchema.CreateUserType){
    return prisma.users.create({data:user})
}