import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 0, name: 'NameA', role: 'admin' },
    { id: 1, name: 'NameB', role: 'user' },
    { id: 2, name: 'NameC', role: 'user' },
  ];

  getUsers(role?: string) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length,
      ...createUserDto,
    };

    this.users.push(newUser);

    return newUser;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = this.getUser(id);

    Object.assign(user, updateUserDto);

    return user;
  }

  deleteUser(id: number) {
    const toBeRemoved = this.getUser(id);

    this.users = this.users.filter((user) => user.id !== id);

    return toBeRemoved;
  }
}
