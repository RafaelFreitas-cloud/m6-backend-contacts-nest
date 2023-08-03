import { Module } from '@nestjs/common';
import { ContactsModule } from './modules/contacts/contacts.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ContactsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
