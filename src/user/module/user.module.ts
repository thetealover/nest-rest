import { ConsoleLogger, Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { CreateUserService } from '../service/create/create-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../model/user.entity';
import { UserPersistenceService } from '../persistence/user-persistence.service';
import { GetUserByIdService } from '../service/get/get-user-by-id.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    ConsoleLogger,
    CreateUserService,
    GetUserByIdService,
    UserPersistenceService,
  ],
  controllers: [UserController],
})
export class UserModule {}
