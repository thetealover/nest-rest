import { UserPersistenceService } from '../../persistence/user-persistence.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional';
import { User } from '../../model/user.entity';

@Injectable()
export class GetUserByIdService {
  constructor(
    private readonly userPersistenceService: UserPersistenceService,
  ) {}

  @Transactional()
  async get(id: bigint): Promise<User> {
    return this.userPersistenceService.findByIdExistenceAssured(
      id,
      new HttpException(`No user found by id=${id}`, HttpStatus.NOT_FOUND),
    );
  }
}
