import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4, { message: 'Username should be at least 4 characters long' })
  @MaxLength(20, { message: "Username can't exceed 20 characters" })
  username: string;

  @IsString()
  @MinLength(8, {
    message: 'Password should be longer than 8 characters',
  })
  @MaxLength(32, { message: 'Password length should not exceed 32 characters' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password must include 1 capital letter, 1 small letter, and 1 number or special character',
  })
  password: string;
}
