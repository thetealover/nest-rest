import { UserPersistenceService } from '../../persistence/user-persistence.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserByIdService {
  constructor(
    private readonly userPersistenceService: UserPersistenceService,
  ) {}

  get(id: bigint) {
    return this.userPersistenceService.findById(id);
  }
}
