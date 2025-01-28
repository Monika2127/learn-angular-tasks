import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TASK } from '../../types/tasks.interface';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'ms-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) tasks!: TASK;

  constructor(private readonly tasksService: TasksService) {}

  onCompleteTask() {
    this.tasksService.onCompleteTask(this.tasks.id);
  }
}
