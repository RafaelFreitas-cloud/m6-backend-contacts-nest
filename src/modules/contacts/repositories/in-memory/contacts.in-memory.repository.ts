/* eslint-disable prettier/prettier */
import { CreateContactDto } from '../../dtos/create-contact.dto';
import { Contact } from '../../entities/contacts.entity';
import { ContactsRepository } from '../contacts.repositoy';

export class ContactsInMemoryRepository implements ContactsRepository {
  private database: Contact[] = [];

  async create(data: CreateContactDto): Promise<Contact> {
    const newContact = new Contact();
    Object.assign(newContact, {
      ...data,
    });
    this.database.push(newContact);
    return newContact;
  }
  async findAll(): Promise<Contact[]> {
    return this.database;
  }
  async findOne(id: string): Promise<Contact> {
    const contactId = parseInt(id);
    const contact = this.database.find((contact) => contact.id == contactId);

    return contact;
  }
  async update(id: string): Promise<Contact> {
    const contactId = parseInt(id);
    const contact = this.database.find((contact) => contact.id == contactId);

    return contact;
  }
  async delete(id: string): Promise<void> {
    const contactId = parseInt(id);
    const contact = this.database.find((contact) => contact.id == contactId);
    console.log(contact);
  }
}
