import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttr {
  name: string;
  surname: string;
  email: string;
  password: string;
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surname: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  position: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

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
