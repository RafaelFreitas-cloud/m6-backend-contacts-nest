/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { UseGuards } from '@nestjs/common';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Patch, Delete, Request } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dtos/create-contact.dto';
import { UpdateContactDto } from './dtos/update-contact.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('contacts')
export class ContactsControllers {
  constructor(private contactsService: ContactsService) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() data: CreateContactDto, @Request() req) {
    return this.contactsService.create(data, req.user.id)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.contactsService.findAll()
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.contactsService.findOne(id)
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(id, updateContactDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }

}
