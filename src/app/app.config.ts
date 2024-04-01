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
      toastrTimeOut: 100000,
      fontFamily:'Montserrat SemiBold',
      fontSize:13,
      progressBarAnimation:'increase',
      removeProgressBar:false,
      removeButton:false,
      removeBackgrounds:true
    })),
    provideClientHydration()]
};
