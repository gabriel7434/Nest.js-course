import { TaskStatus } from '../task-status.enum';
import { IsNotEmpty } from 'class-validator';
import { IsEnum } from 'class-validator';
import { IsOptional } from 'class-validator';

export class GetTasksFilter {
  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
