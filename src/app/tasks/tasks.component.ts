import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TASKS_LIST } from '../dummy-data/tasks';
import { NEWTASKDATA, TASK } from '../types/tasks.interface';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'ms-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId!: string;

  constructor(private readonly taskService: TasksService) {}

  isAddingTask = false;

  tasks: TASK[] = TASKS_LIST;

  get selectedUserTask() {
    return this.taskService.getUserTasks(this.userId);
  }

  addTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

} 
