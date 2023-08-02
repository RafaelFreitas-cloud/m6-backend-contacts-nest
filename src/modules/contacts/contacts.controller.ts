/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dtos/create-contact.dto';

@Controller('contacts')
export class ContactsControllers {
  constructor(private contactsService: ContactsService) {}
  @Post()
  create(@Body() data: CreateContactDto) {
    return this.contactsService.create(data)
  }

  @Get()
  findAll() {
    return this.contactsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id)
  }

}
