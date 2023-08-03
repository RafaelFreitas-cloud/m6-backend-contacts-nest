/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { CreateContactDto } from '../../dtos/create-contact.dto';
import { Contact } from '../../entities/contacts.entity';
import { ContactsRepository } from '../contacts.repositoy';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
    constructor(private prisma:PrismaService){}
  async create(data: CreateContactDto): Promise<Contact> {
    const contact = new Contact()
    Object.assign(contact,{
        ...data
    })
  
    const newContact = await this.prisma.contact.create({
        data: {
            ...contact,
            userId: contact.userId
        }
    })
    return newContact
  }
  async findAll(): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany()
    return contacts
  }
  async findOne(id: string): Promise<Contact> {
    const contactId = parseInt(id)
    const contact = await this.prisma.contact.findUnique({
        where:{id:contactId}
    })
    return contact
  }
}
