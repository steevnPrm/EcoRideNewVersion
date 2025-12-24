import * as z from "zod";

const usernameSchema = z.string().min(3).max(30);

export class Username{
    private readonly value : string

    constructor(
        username : string
    ){
        this.value = usernameSchema.parse(username);
    }

    getValue() : string{
        return this.value;
    } 
}