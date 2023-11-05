import { Injectable, NotFoundException } from '@nestjs/common';
import { users } from './utils/users.util';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AppService {
  getUsers() {
    return users;
  }

  addUser(user: UserDto) {
    users.push(user);

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
