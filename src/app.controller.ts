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
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/list')
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('/add')
  addUsers(@Body() user: any) {
    return this.appService.addUser(user);
  }

  @Delete('/delete/:email')
  deleteUser(@Param('email') email: string) {
    return this.appService.deleteUser(email);
  }

  @Put('/update')
  updateUser(@Body() updatedUser: UserDto) {
    return this.appService.updateUser(updatedUser);
  }
}
