import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from '../../controller/model/create-user-request.dto';
import { User } from '../../model/user.entity';
import { UserPersistenceService } from '../../persistence/user-persistence.service';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userPersistenceService: UserPersistenceService,
  ) {}

  @Transactional()
  async create(request: CreateUserRequestDto): Promise<User> {
    const username = request.username;
    await this.userPersistenceService.assureUserNotExists(
      username,
      new HttpException(
        `User already exists with the username=${username}`,
        HttpStatus.CONFLICT,
      ),
    );

    return this.userPersistenceService.create({
      username: username,
      firstName: request.firstName,
      lastName: request.lastName,
    });
  }
}
