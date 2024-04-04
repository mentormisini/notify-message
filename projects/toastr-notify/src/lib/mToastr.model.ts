import {SafeHtml} from "@angular/platform-browser";

export interface MToastrModel {
  id: number;
  type: string;
  message: string;
  icon: SafeHtml;
  timeoutRef: any;
  closeIcon:SafeHtml;
}
