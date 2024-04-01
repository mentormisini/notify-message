import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
  }
)
export class MToastrConfigService{
  public config = {
    closeButton: true,
    progressBarTimeOut: 5,
    progressBar: true,
    toastrTimeOut:5000
  };

  get progressBarTimeOut(): number {
    return this.config.progressBarTimeOut;
  }
  get toastrTimeOut(){
    return this.config.toastrTimeOut;
  }

  get progressBar(): boolean {
    return this.config.progressBar;
  }
  updateConfig(newConfig: Partial<typeof this.config>): void {
    this.config = { ...this.config, ...newConfig };
  }
}
