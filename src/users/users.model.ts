import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttr {
  name: string;
  surname: string;
  email: string;
  password: string;
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserCreationAttr> {
  @ApiProperty({ example: '1' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'surname' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surname: string;

  @ApiProperty({ example: 'position' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  position: string;

  @ApiProperty({ example: 'email@example.com' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: 'password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  //   @Column({
  //     type: DataType.NUMBER,
  //     allowNull: false,
  //   })
  //   roleID: number;

  //   @Column({
  //     type: DataType.NUMBER,
  //     allowNull: false,
  //   })
  //   departmentID: number;

  //   @Column({
  //     type: DataType.NUMBER,
  //     allowNull: false,
  //   })
  //   documentsID: number[];
}
