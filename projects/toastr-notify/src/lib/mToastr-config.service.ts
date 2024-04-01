import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
  }
)

export class MToastrConfigService{
  public config = {
    closeButton: true,
    toastrTimeOut:5000,
    fontFamily:"Montserrat SemiBold",
    fontSize:12,
    progressBarAnimation:'increase',
    removeProgressBar:false,
    removeButton:false,
    removeBackgrounds:false
  };

  toastrTimeOut:number = this.config.toastrTimeOut;
  fontFamily: string = this.config.fontFamily;
  fontSize:number = this.config.fontSize;
  progressBarAnimation:string = this.config.progressBarAnimation;
  removeProgressBar:boolean = this.config.removeProgressBar;
  removeButton:boolean = this.config.removeButton;
  removeBackgrounds:boolean = this.config.removeBackgrounds;

}
