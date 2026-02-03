import { IsEnum, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(3, { message: 'Name is too short' })
  name: string;

  @IsEnum(['admin', 'user'], { message: 'Invalid role' })
  role: string;
}
