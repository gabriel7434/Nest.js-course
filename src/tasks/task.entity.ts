// SHAPE OF OUR TASK IN THE DATABSE
// This is Data Mapper pattern (task.repository + task.entity(model))
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Entity()
// Entity says that the class is related to databse
export class Task {
  @PrimaryGeneratedColumn('uuid')
  // generate id as a primary column
  id: string;

  // it is a column, not a random property in a class
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
