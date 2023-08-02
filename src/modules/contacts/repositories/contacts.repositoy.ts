/* eslint-disable prettier/prettier */

import { CreateContactDto } from "../dtos/create-contact.dto";
import { Contact } from "../entities/contacts.entity";

export abstract class ContactsRepository {
  abstract create(data: CreateContactDto): Promise<Contact>;
  abstract findAll(): Promise<Contact[]>;
  abstract findOne(id: string): Promise<Contact>;
}
