import {ApplicationConfig, importProvidersFrom, inject} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideAnimations} from "@angular/platform-browser/animations";
import {MToastrModule} from "../../projects/toastr-notify/src/lib/mToastr.module";

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes),
    provideAnimations(),
    provideClientHydration()]
};
