import { User } from '../../model/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }

  @ApiProperty()
  id: bigint;
  @ApiProperty()
  username: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
}
