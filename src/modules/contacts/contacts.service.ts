/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dtos/create-contact.dto';
import { ContactsRepository } from './repositories/contacts.repositoy';
import { UpdateContactDto } from './dtos/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}
  async create(data: CreateContactDto, userId: string) {
    return await this.contactsRepository.create(data, userId);
  }

  async findAll(userId: string) {
    return await this.contactsRepository.findAll(userId);
  }

  async findOne(id: string, userId: string) {
    const contact = await this.contactsRepository.findOne(id, userId);
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    return contact;
  }
  async update(id: string, updateContactDto: UpdateContactDto, userId: string) {
    const findContact = await this.contactsRepository.findOne(id, userId);
    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }
    return this.contactsRepository.update(id, updateContactDto, userId);
  }

  async remove(id: string, userId: string) {
    const findContact = await this.contactsRepository.findOne(id, userId);
    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }
    return this.contactsRepository.delete(id, userId);
  }
}
