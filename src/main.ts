// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';
// import { importProvidersFrom } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormlyModule } from '@ngx-formly/core';
// import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

// bootstrapApplication(AppComponent, {
//     providers: [
//         importProvidersFrom(
//             ReactiveFormsModule,
//             FormlyModule.forRoot(),
//             FormlyBootstrapModule
//         )
//     ]
// }).catch((err) => console.error(err));

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)