import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'name' })
  readonly name: string;

  @ApiProperty({ example: 'surname' })
  readonly surname: string;

  @ApiProperty({ example: 'email@example.com' })
  readonly email: string;

  @ApiProperty({ example: 'password' })
  readonly password: string;
}
