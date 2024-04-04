import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
  }
)

export class MToastrConfigService{
  public config = {
    closeButton: true,
    toastrTimeOut:5000,
    fontFamily:"Arial",
    fontSize:15,
    progressBarAnimation:'increase',
    removeProgressBar:false,
    removeButton:false,
    removeBackgrounds:false,
    position: "_top",
    align_position:"_right"
  };

  toastrTimeOut:number = this.config.toastrTimeOut;
  fontFamily: string = this.config.fontFamily;
  fontSize:number = this.config.fontSize;
  progressBarAnimation:string = this.config.progressBarAnimation;
  removeProgressBar:boolean = this.config.removeProgressBar;
  removeButton:boolean = this.config.removeButton;
  removeBackgrounds:boolean = this.config.removeBackgrounds;
  position:string = this.config.position;
  align_position:string = this.config.align_position;

}
