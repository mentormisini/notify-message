import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ToastrNotifyService} from "./toastr-notify.service";
import {SafeHtml} from "@angular/platform-browser";
import {animate, style, transition, trigger} from "@angular/animations";
import {MToastrConfigService} from "./mToastr-config.service";

@Component({
  selector: 'lib-toastr-notify',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf
  ],
  templateUrl:'toastr-notify.component.html',
  styleUrl:'toastr-notify.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ToastrNotifyComponent implements OnInit{
 public toastr!: { type: string; message: string; icon: SafeHtml } |any;

  constructor(private toastrService: ToastrNotifyService,
              public mToastConfig: MToastrConfigService) {
  }

  ngOnInit(): void {
    this.toastrService.getToastr().subscribe(toastr => {
      this.toastr = toastr;
    });
  }

  hideToastr(id: number): void {
    const toastrToRemove = this.toastr.find((toastr:any)=> toastr.id === id);
    if (toastrToRemove) {
      const index = this.toastr.indexOf(toastrToRemove);
      this.toastr.splice(index, 1);
      this.toastrService.hide(toastrToRemove);
    }
  }




}
