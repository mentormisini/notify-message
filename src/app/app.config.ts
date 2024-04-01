import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideAnimations} from "@angular/platform-browser/animations";
import {MToastrModule} from "../../projects/toastr-notify/src/lib/mToastr.module";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(MToastrModule.withConfig({
      toastrTimeOut: 10000,
      progressBarTimeOut:1000
    })),
    provideClientHydration()]
};
