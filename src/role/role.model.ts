import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface RoleCreationAttr {
  userID: number;
  title: string;
  isAdmin: boolean;
}

@Table({ tableName: 'role', createdAt: false, updatedAt: false })
export class Role extends Model<Role, RoleCreationAttr> {
  @BelongsTo(() => User)
  user: User;

  @ApiProperty({ example: '1' })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    unique: true,
  })
  userID: number;

  @ApiProperty({ example: 'user' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({ example: 'false' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isAdmin: boolean;
}
