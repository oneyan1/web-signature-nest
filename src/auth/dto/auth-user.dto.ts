import { ApiProperty } from '@nestjs/swagger';

export class AuthUserDto {
  @ApiProperty({ example: 'email@example.com' })
  readonly email: string;

  @ApiProperty({ example: 'password' })
  readonly password: string;
}
