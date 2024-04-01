import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToastrNotifyComponent} from "../../projects/toastr-notify/src/lib/toastr-notify.component";
import {ToastrNotifyService} from "../../projects/toastr-notify/src/lib/toastr-notify.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToastrNotifyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[ToastrNotifyComponent]
})
export class AppComponent {
  constructor(public toasterService: ToastrNotifyService) {
  }
  title = 'Notify';

}
