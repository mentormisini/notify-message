import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {MToastrModel} from "./mToastr.model";
import {MToastrConfigService} from "./mToastr-config.service";


@Injectable({
  providedIn: 'root'
})

export class ToastrNotifyService {
  private toastrs: MToastrModel[] = [];
  private toastrId = 0;
  private toastrSubject = new BehaviorSubject<MToastrModel[]>([]);

  constructor(private domsanitizer: DomSanitizer, private mToastrConfig: MToastrConfigService) {}

   getToastr() {
    return this.toastrSubject.asObservable();
  }

  showToastr(type: string, message: string, icon: SafeHtml,closeIcon: SafeHtml): void {
    const toastr: MToastrModel = {
      id: ++this.toastrId,
      type,
      message,
      icon,
      timeoutRef: null,
      closeIcon
    };
    this.toastrs.push(toastr);
    this.toastrSubject.next([...this.toastrs]);
    this.autoClose(toastr);
  }

  showSuccess(message: string): void {
    const success_icon = this.domsanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="25" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>');
    const close_success = this.domsanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="19" style="cursor: pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1ea97c" class="w-6 h-6"> <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />`)
    this.showToastr('success', message, success_icon,close_success);
  }
  showWarning(message:string):void{
    const warning_icon = this.domsanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  width="25" stroke="orange" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>');
    const close_warning = this.domsanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="19" style="cursor: pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#cc8925" class="w-6 h-6"> <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />`)
    this.showToastr('warning', message, warning_icon,close_warning);
  }
  showInfo(message:string):void{
    const info_icon = this.domsanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" /></svg>');
    const close_info = this.domsanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="19" style="cursor: pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3b82f6" class="w-6 h-6"> <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />`)
    this.showToastr('info', message, info_icon,close_info);
  }
  showDanger(message:string):void{
    const danger_icon = this.domsanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="25" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="firebrick" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" /></svg>');
    const close_danger = this.domsanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="19" style="cursor: pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#B22222FF" class="w-6 h-6"> <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />`)
    this.showToastr('danger', message, danger_icon,close_danger);
  }

  autoClose(toastr: MToastrModel): void {
      toastr.timeoutRef = setTimeout(() => {
        this.hide(toastr);
      }, this.mToastrConfig.toastrTimeOut);
  }

  hide(toastr: any): void {
    const index = this.toastrs.indexOf(toastr);
    if (index !== -1) {
      clearTimeout(toastr.timeoutRef);
      this.toastrs.splice(index, 1);
      this.toastrSubject.next([...this.toastrs]);
    }
  }


}

