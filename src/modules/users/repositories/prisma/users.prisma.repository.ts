/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateUserDto } from '../../dto/update-user.dto';

// @Injectable()
// export class UsersPrismaRepository implements UsersRepository {
//   constructor(private prisma: PrismaService) {}
//   async create(data: CreateUserDto): Promise<User> {
//     console.log(data);
//     const user = new User();
//     Object.assign(user, {
//       ...data,
//     });
//     const newUser = await this.prisma.user.create({
//       data: { ...user },
//     });
//     return newUser;
//   }
//   async findAll(): Promise<User[]> {
//     const users = await this.prisma.user.findMany();
//     return users;
//   }
//   async findOne(id: string): Promise<User> {
//     const user = await this.prisma.user.findUnique({
//       where: { id },
//     });
    
//     return user;
//   }
//   async findByEmail(email: string): Promise<User> {
//     const user = await this.prisma.user.findUnique({
//       where: { email },
//     });
   
//     return user;
//   }
//   async update(id: string, data: UpdateUserDto): Promise<User> {
//     const user = await this.prisma.user.update({
//       where: { id },
//       data: { ...data },
//     });
   
//     return user;
//   }
//   async delete(id: string): Promise<void> {
//     const user = await this.prisma.user.delete({
//       where: { id },
//     });
    
//   }
// }



@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    console.log(data);
    const user = new User();
    Object.assign(user, {
      ...data,
    });
    const newUser = await this.prisma.user.create({
      data: { ...user },
    });
    return newUser;
  }
  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
  async findOne(id: string): Promise<User> {
    const userId = parseInt(id)
    const user = await this.prisma.user.findUnique({
      where: { id:userId },
    });
    
    return user;
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
   
    return user;
  }
  async update(id: string, data: UpdateUserDto): Promise<User> {
    const userId = parseInt(id)
    const user = await this.prisma.user.update({
      where: { id:userId },
      data: { ...data },
    });
   
    return user;
  }
  
  async delete(id: string): Promise<void> {
    const userId = parseInt(id)
    const user = await this.prisma.user.delete({
      where: { id:userId },
    });
    
  }
}
