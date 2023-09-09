import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class UpdateTaskStatus {
  @IsEnum(TaskStatus)
  // @IsEnum validates that the status value will be a parameter from Taskstatus
  status: TaskStatus;
}
