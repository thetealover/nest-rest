import {
  Body,
  ConsoleLogger,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserRequestDto } from './model/create-user-request.dto';
import { CreateUserService } from '../service/create/create-user.service';
import { UserDto } from './model/user.dto';
import { GetUserByIdService } from '../service/get/get-user-by-id.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('v1/users')
@ApiTags('Users Controller V1')
export class UserController {
  constructor(
    private readonly logger: ConsoleLogger,
    private readonly createUserService: CreateUserService,
    private readonly getUserByIdService: GetUserByIdService,
  ) {}

  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({ type: UserDto })
  @Post()
  async create(@Body() request: CreateUserRequestDto): Promise<UserDto> {
    this.logger.debug(`Creating a user for request=${request}`);

    const user = await this.createUserService.create(request);

    this.logger.log(`Created a user with id=${user.id}`);
    return new UserDto(user);
  }

  @ApiOperation({ summary: 'Get a user' })
  @ApiResponse({ type: UserDto })
  @Get('/:id')
  async get(@Param('id') id: bigint): Promise<UserDto> {
    this.logger.debug(`Getting a user with id=${id}`);

    const user = await this.getUserByIdService.get(id);

    this.logger.log(`Got a user with id=${id}`);
    return new UserDto(user);
  }
}
