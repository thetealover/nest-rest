import { User } from '../../model/user.entity';

export class UserDto {
  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }

  id: bigint;
  username: string;
  firstName: string;
  lastName: string;
}
