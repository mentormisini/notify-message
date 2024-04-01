import { NgModule } from '@angular/core';
import {ToastrNotifyComponent} from "./toastr-notify.component";
import {ToastrNotifyService} from "./toastr-notify.service";
import {MToastrConfigService} from "./mToastr-config.service";

@NgModule({
  imports: [
    ToastrNotifyComponent,
  ],
  providers: [ToastrNotifyService],
})
export class MToastrModule {
  static withConfig(config: Partial<MToastrConfigService>): {
    ngModule: typeof MToastrModule;
    providers: { provide: typeof MToastrConfigService; useValue: Partial<MToastrConfigService> }[]
  } {
    return {
      ngModule: MToastrModule,
      providers: [
        { provide: MToastrConfigService, useValue: config }
      ]
    };
  }
}
