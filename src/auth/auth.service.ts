//@nestjs/typeorm          8.1.4   8.1.4  10.0.0 dependencies
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UserRepository, //private jwtService: JwtService,
  ) {}

  signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.usersRepository.findBy({ username: username });

    if (
      user.length === 1 &&
      (await bcrypt.compare(password, user[0].password))
    ) {
      return 'success';
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
