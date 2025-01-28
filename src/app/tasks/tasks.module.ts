import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";

import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { TasksComponent } from "./tasks.component";

@NgModule({
    declarations: [
        TasksComponent,
        TaskComponent,
        NewTaskComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        FormlyModule,
        FormlyBootstrapModule,
        CommonModule,
        SharedModule
    ],
    exports: [TasksComponent]
})

export class TasksModule {

}