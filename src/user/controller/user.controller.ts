import {
  Body,
  ConsoleLogger,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserRequestDto } from './model/create-user-request.dto';
import { CreateUserService } from '../service/create/create-user.service';
import { UserDto } from './model/user.dto';
import { GetUserByIdService } from '../service/get/get-user-by-id.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly logger: ConsoleLogger,
    private readonly createUserService: CreateUserService,
    private readonly getUserByIdService: GetUserByIdService,
  ) {}

  @Post()
  async create(@Body() request: CreateUserRequestDto): Promise<UserDto> {
    this.logger.debug(`Creating a user for request=${request}`);
    try {
      const user = await this.createUserService.create(request);

      this.logger.log(`Created a user with id=${user.id}`);
      return new UserDto(user.id, user.username, user.firstName, user.lastName);
    } catch (error) {
      this.logger.error('Error on creating a user', error);
      throw new HttpException(
        'Error on creating a user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/:id')
  async get(@Param('id') id: bigint): Promise<UserDto> {
    this.logger.debug(`Getting a user with ID=${id}`);
    try {
      const user = await this.getUserByIdService.get(id);

      if (user === null || user === undefined) {
        throw new HttpException(
          `User not found with id=${id}`,
          HttpStatus.NOT_FOUND,
        );
      }

      this.logger.log(`Got a user with id=${id}`);
      return new UserDto(user.id, user.username, user.firstName, user.lastName);
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }

      this.logger.error('Error on getting a user', error);
      throw new HttpException(
        'Error on getting a user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
