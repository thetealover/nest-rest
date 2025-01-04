import { Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from '../../controller/model/create-user-request.dto';
import { User } from '../../model/user.entity';
import { UserPersistenceService } from '../../persistence/user-persistence.service';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userPersistenceService: UserPersistenceService,
  ) {}

  async create(request: CreateUserRequestDto): Promise<User> {
    return this.userPersistenceService.create({
      username: request.username,
      firstName: request.firstName,
      lastName: request.lastName,
    });
  }
}
