import { z } from "zod";


// Définie les contraintes de EmailVo
const emailSchema = z.string().email({pattern : z.regexes.email}).toLowerCase();

export class Email{
    private readonly value : string;

// Créer un objet Email à l'appel
    constructor(email : string)
    {
        this.value = emailSchema.parse(email);
    }

// Permet de récupérer la valeur de Email
    getValue() : string{
        return this.value
    };
}