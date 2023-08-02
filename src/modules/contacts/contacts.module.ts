/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ContactsControllers } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { ContactsRepository } from './repositories/contacts.repositoy';
import { ContactsInMemoryRepository } from './repositories/in-memory/contacts.in-memory.repository';

@Module({
  controllers: [ContactsControllers],
  providers: [
    ContactsService,
    {
      provide: ContactsRepository,
      useClass: ContactsInMemoryRepository,
    },
  ],
})
export class ContactsModule {}
