/* eslint-disable prettier/prettier */
// import { randomUUID } from "node:crypto";

import { Exclude } from "class-transformer";

export class User {
  readonly id: number;
  // readonly id: string;
  name: string;
  email: string;
  phone: string;

  @Exclude()
  password: string;
  // createdAt: string;

//   constructor(){
//     this.id = randomUUID()
// }
}
