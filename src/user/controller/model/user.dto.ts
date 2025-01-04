export class UserDto {
  constructor(
    id: bigint,
    username: string,
    firstName: string,
    lastName: string,
  ) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  id: bigint;
  username: string;
  firstName: string;
  lastName: string;
}
