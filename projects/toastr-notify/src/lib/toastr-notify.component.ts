import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {ToastrNotifyService} from "./toastr-notify.service";
import {SafeHtml} from "@angular/platform-browser";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'lib-toastr-notify',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    AsyncPipe,
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
  animationDurationSeconds: number = 20;

  constructor(private toastrService: ToastrNotifyService) { }

  ngOnInit(): void {
    this.toastrService.getToastr().subscribe(toastr => {
      this.toastr = toastr;
      console.log(this.toastr)
    });
  }

  hideToastr(id: number): void {
    const index = this.toastr.findIndex((t: { id: number; }) => t.id === id);
    if (index !== -1) {
      this.toastr.splice(index, 1);
      console.log(this.toastr,"ACTUAL")
      this.toastrService.hide(index);
    }
  }



}
