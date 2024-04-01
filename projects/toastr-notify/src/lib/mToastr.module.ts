// app.module.ts

import { NgModule } from '@angular/core';
import {ToastrNotifyComponent} from "./toastr-notify.component";
import {ToastrNotifyService} from "./toastr-notify.service";
import {MToastrConfigService} from "./mToastr-config.service";

@NgModule({
  imports: [
    ToastrNotifyComponent,
  ],
  providers: [ToastrNotifyService, MToastrConfigService],
})
export class MToastrModule {
  static withConfig(config: Partial<MToastrConfigService>): {
    ngModule: typeof MToastrModule;
    providers: { provide: typeof MToastrConfigService; useValue: Partial<MToastrConfigService> }[]
  } {
    const mergedConfig = { ...new MToastrConfigService(), ...config }; // Merge with default values
    return {
      ngModule: MToastrModule,
      providers: [
        { provide: MToastrConfigService, useValue: mergedConfig }
      ]
    };
    }}
