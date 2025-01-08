import { Repository } from 'typeorm';
import { User } from '../model/user.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserPersistenceService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: Partial<User>): Promise<User> {
    return this.userRepository.save(user);
  }

  async findByIdExistenceAssured(
    id: bigint,
    fallbackException: HttpException,
  ): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });

    if (user === null) {
      throw fallbackException;
    }
    return user;
  }

  async assureUserNotExists(
    username: string,
    fallbackException: HttpException,
  ) {
    const user = await this.findByUsername(username);
    if (user !== null) {
      throw fallbackException;
    }
  }

  async findByUsername(username: string): Promise<User> {
    return this.userRepository.findOneBy({ username });
  }
}
