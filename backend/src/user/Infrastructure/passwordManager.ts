import bcrypt from "node_modules/bcryptjs";

export class PasswordManagment{
    async hash(password : string) : Promise<string>{
        const hash =  await bcrypt.hash(password , 10)
        return hash
    }
}