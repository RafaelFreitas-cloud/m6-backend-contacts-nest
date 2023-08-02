/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dtos/create-contact.dto';
import { ContactsRepository } from './repositories/contacts.repositoy';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}
  async create(data: CreateContactDto) {
    return await this.contactsRepository.create(data);
  }

  async findAll() {
    return await this.contactsRepository.findAll();
  }

  async findOne(id: string) {
    const contact = await this.contactsRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    return contact;
  }
}
