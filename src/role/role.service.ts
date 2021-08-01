import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDTO } from './dto/create-role.dto';
import { Role } from './role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createUserRole(dto: CreateRoleDTO) {
    const createRole = await this.roleRepository.create(dto);
    return createRole;
  }
}
