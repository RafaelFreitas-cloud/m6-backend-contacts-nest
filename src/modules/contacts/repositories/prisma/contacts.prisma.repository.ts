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
  async create(data: CreateContactDto, stringUserId: string): Promise<Contact> {
    const contact = new Contact();
    const userId = parseInt(stringUserId);
    Object.assign(contact, {
      ...data,
      userId,
    });

    const newContact = await this.prisma.contact.create({
      data: {
        ...contact,
        userId: contact.userId,
      },
    });
    return newContact;
  }
  async findAll(stringUserId: string): Promise<Contact[]> {
    const userId = parseInt(stringUserId);
    const contacts = await this.prisma.contact.findMany({
      where: { userId: userId },
    });

    contacts.sort((a, b) => a.name.localeCompare(b.name));

    return contacts;
  }
  async findOne(id: string, stringUserId: string): Promise<Contact> {
    const userId = parseInt(stringUserId);
    const contactId = parseInt(id);

    const contact = await this.prisma.contact.findUnique({
      where: { id: contactId, userId: userId },
    });

    return contact;
  }
  async update(
    id: string,
    data: UpdateContactDto,
    stringUserId: string,
  ): Promise<Contact> {
    const userId = parseInt(stringUserId);
    const contactId = parseInt(id);

    const contact = await this.prisma.contact.update({
      where: { id: contactId, userId: userId },
      data: { ...data },
    });

    return contact;
  }
  async delete(id: string, stringUserId: string): Promise<void> {
    const userId = parseInt(stringUserId);
    const contactId = parseInt(id);

    const contact = await this.prisma.contact.delete({
      where: { id: contactId, userId: userId },
    });
    console.log(contact);
  }
}
