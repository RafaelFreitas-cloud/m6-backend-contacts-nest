/* eslint-disable prettier/prettier */
// import { randomUUID } from "crypto"

export class Contact {
  readonly id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  userId: number;

  // constructor(){
  //     this.id = randomUUID()
  // }
  constructor() {
    const date = new Date();
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0'); // Os meses são indexados a partir de 0
    const ano = date.getFullYear().toString();
    const horas = date.getHours().toString().padStart(2, '0');
    const minutos = date.getMinutes().toString().padStart(2, '0');
    const segundos = date.getSeconds().toString().padStart(2, '0');

    const formatedDate = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;

    this.createdAt = formatedDate;
  }
}
