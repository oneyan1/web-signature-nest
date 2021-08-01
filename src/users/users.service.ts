import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDTO } from 'src/role/dto/create-role.dto';
import { RoleService } from 'src/role/role.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RoleService
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const userRole: CreateRoleDTO = {
      userID: user.userID,
      title: 'user',
      isAdmin: false,
    };
    await this.roleService.createUserRole(userRole);
    return user;
  }

  async getAllUser() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
