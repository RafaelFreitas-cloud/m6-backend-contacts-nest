/* eslint-disable prettier/prettier */


import { CreateContactDto } from '../dtos/create-contact.dto';
import { UpdateContactDto } from '../dtos/update-contact.dto';
import { Contact } from '../entities/contacts.entity';

export abstract class ContactsRepository {
  abstract create(data: CreateContactDto, userId: string): Promise<Contact>;
  abstract findAll(userId: string): Promise<Contact[]>;
  abstract findOne(id: string, userId: string): Promise<Contact>;
  abstract update(id: string, data: UpdateContactDto, userId: string): Promise<Contact>;
  abstract delete(id: string, userId: string): Promise<void>;
}
