/* eslint-disable prettier/prettier */
import { randomUUID } from "crypto"

export class Contact {
    readonly id:string
    name:string
    email:string
    phone:string
    // createdAt: string | Date;
    user_id:string

    constructor(){
        this.id = randomUUID()
    }
}