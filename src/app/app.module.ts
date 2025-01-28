import { NgModule } from "@angular/core";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        TasksModule,
        SharedModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyBootstrapModule
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}