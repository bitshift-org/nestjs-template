import { ApiHideProperty } from '@nestjs/swagger';
import { User as PrismaUser } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class User implements PrismaUser {
  id: string;

  email: string;

  username: string;

  @Exclude()
  @ApiHideProperty()
  password: string;

  @Exclude()
  createAt: Date;

  @Exclude()
  updateAt: Date;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
