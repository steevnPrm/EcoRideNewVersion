import { PasswordManagment } from "../Infrastructure/passwordManager";

export class Password{
    private readonly value : string
    private constructor(value : string)
    {
        this.value = value
    }

    static async create(value : string ,passwordManagement : PasswordManagment ):Promise<Password>{
        const hashed = await passwordManagement.hash(value)
        return new Password(hashed)
    }
}