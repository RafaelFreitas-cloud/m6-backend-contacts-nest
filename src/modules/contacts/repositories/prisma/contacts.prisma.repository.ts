/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { Contact } from '../../entities/contacts.entity';
import { ContactsRepository } from '../contacts.repositoy';
import { Injectable } from '@nestjs/common';
import { CreateContactDto } from '../../dtos/create-contact.dto';
import { UpdateContactDto } from '../../dtos/update-contact.dto';

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateContactDto): Promise<Contact> {
    console.log(data);
    const contact = new Contact();
    console.log(contact);
    Object.assign(contact, {
      ...data,
    });

    const newContact = await this.prisma.contact.create({
      data: {
        ...contact,
        userId: contact.userId,
      },
    });
    return newContact;
  }
  async findAll(): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany();
    return contacts;
  }
  async findOne(id: string): Promise<Contact> {
    const contactId = parseInt(id);
    const contact = await this.prisma.contact.findUnique({
      where: { id: contactId },
    });
    return contact;
  }
  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contactId = parseInt(id);
    const contact = await this.prisma.contact.update({
      where: { id: contactId },
      data: { ...data },
    });

    return contact;
  }
  async delete(id: string): Promise<void> {
    const contactId = parseInt(id);
    const contact = await this.prisma.contact.delete({
      where: { id: contactId },
    });
    console.log(contact)
  }
}
