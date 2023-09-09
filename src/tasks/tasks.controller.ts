import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilter } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatus } from './dto/update-task-status.dto';
import { Task } from './task.entity';

@Controller('tasks') // '/tasks'
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilter): Task[] {
  //   // if we have any filters defined, call tasksService.getTasksWithFilters
  //   // otherwise, get all tasks
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  // //Task is a return type, we know we will return task
  // @Post()
  // createTask(@Body() CreateTask: CreateTaskDto): Task {
  //   return this.tasksService.createTask(CreateTask);
  // }
  // // create task, put it in the array, and return the result

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   return this.tasksService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatus,
  // ): Task {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
