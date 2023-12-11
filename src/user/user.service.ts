import { Injectable, NotFoundException } from '@nestjs/common';
import { users } from '../utils/users.util';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSchema } from 'src/infra/db/user.schema';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserSchema)
    private readonly userRepository: Repository<UserSchema>,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  addUser(user: UserDto) {
    this.userRepository.save({
      ...user,
    });

    return users;
  }

  deleteUser(email: string) {
    users.map((item) => {
      if (item.email == email) {
        users.pop();

        return item;
      }
    });

    return new NotFoundException('Usuário não encontrado');
  }

  updateUser(updatedUser: UserDto) {
    const userIndex = users.findIndex(
      (user) => user.email === updatedUser.email,
    );

    if (userIndex === -1) {
      throw new NotFoundException('Usuário não encontrado');
    }

    users[userIndex] = updatedUser;
    return users[userIndex];
  }
}
