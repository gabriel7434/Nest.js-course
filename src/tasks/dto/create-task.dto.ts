import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  // ? means optional
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  title: string;
}
