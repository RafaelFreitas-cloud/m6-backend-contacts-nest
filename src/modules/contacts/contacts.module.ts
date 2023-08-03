/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ContactsControllers } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { ContactsRepository } from './repositories/contacts.repositoy';
// import { ContactsInMemoryRepository } from './repositories/in-memory/contacts.in-memory.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ContactsPrismaRepository } from './repositories/prisma/contacts.prisma.repository';

@Module({
  controllers: [ContactsControllers],
  providers: [
    ContactsService,
    PrismaService,
    {
      provide: ContactsRepository,
      useClass: ContactsPrismaRepository,
    },
  ],
})
export class ContactsModule {}
