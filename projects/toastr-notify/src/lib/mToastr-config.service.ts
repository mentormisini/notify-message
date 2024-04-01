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
    fontSize:12
  };

  toastrTimeOut:number = this.config.toastrTimeOut;
  fontFamily: string = this.config.fontFamily;
  fontSize:number = this.config.fontSize;

}
