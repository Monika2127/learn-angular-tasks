import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { addTaskConfig } from '../../formly-field/formly-config.config';
import { NEWTASKDATA } from '../../types/tasks.interface';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'ms-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({ required: true }) userId!: string;
  @Output() closeDialog = new EventEmitter<void>();

  private readonly tasksServuce = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  /*  For Formly form
  *   form = new FormGroup({});
  *   model = {};
  *   fields: FormlyFieldConfig[] = addTaskConfig;
  */

  onCancel() {
    this.closeDialog.emit();
  }

  onSubmit() {
    this.tasksServuce.onAddTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.closeDialog.emit();
  }
}


/*  With Signals
*  enteredTitle = signal('');
*  enteredSummary = signal('');
*  enteredDate = signal('');
*/