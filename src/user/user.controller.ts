import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('/add')
  addUsers(@Body() user: any) {
    return this.userService.addUser(user);
  }

  @Delete('/delete/:email')
  deleteUser(@Param('email') email: string) {
    return this.userService.deleteUser(email);
  }

  @Put('/update')
  updateUser(@Body() updatedUser: UserDto) {
    return this.userService.updateUser(updatedUser);
  }
}
