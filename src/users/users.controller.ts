import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('role') role: string) {
    return [{ role }];
  }

  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return {
      name: createUserDto.name,
    };
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return {
      id,
      name: updateUserDto.name,
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return {};
  }
}
