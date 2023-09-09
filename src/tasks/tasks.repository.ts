// This is Data Mapper pattern (task.repository + task.entity(model))
// Repository is the central place for you to add more logic for interacting with your database

import { EntityRepository, Repository } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {}
// This repository is available anywhere in your tasks module via dependency injection.
