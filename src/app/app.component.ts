import {ChangeDetectorRef, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToastrNotifyComponent} from "../../projects/toastr-notify/src/lib/toastr-notify.component";
import {ToastrNotifyService} from "../../projects/toastr-notify/src/lib/toastr-notify.service";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Subject} from "rxjs";
import {MToastrConfigService} from "../../projects/toastr-notify/src/lib/mToastr-config.service";

interface terminalModel {
  name:string,
  value:any
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastrNotifyComponent, NgIf, FormsModule, NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[ToastrNotifyComponent],
})
export class AppComponent {
  constructor(public toasterService: ToastrNotifyService, public configService: MToastrConfigService) {
  }

  title = 'Notify';
  config: string = 'MToastrModule.withConfig {(';
  closeConfig: string = '})';
  selected_toastr = 'success';
  desired_text: string = "Your default message";
  toastrTimeOut!: number;
  fontFamily!: string;
  fontSize!: number;
  storeConfig: terminalModel[] = [];
  progressBarAnimation!:boolean;
  removeProgressBar!:boolean;
  removeButton!:boolean;
  removeBackgrounds!:boolean;
  position!:string;
  positionBottom!:string;
  public storedSubject$ = new Subject()
  public getConfigs = this.storedSubject$.asObservable();

  showToastr() {
    switch (this.selected_toastr) {
      case 'success' : {
        this.toasterService.showSuccess(this.desired_text);
        break
      }
      case 'warning' : {
        this.toasterService.showWarning(this.desired_text);
        break
      }
      case 'info' : {
        this.toasterService.showInfo(this.desired_text);
        break
      }
      case 'danger' : {
        this.toasterService.showDanger(this.desired_text);
        break
      }
    }
  }

  pushData(manualString: string, property: any) {
    const store: { [key: string]: terminalModel } = {}; // Object to store data
    this.storeConfig.forEach(item => {
      store[item.name] = item; // Convert array to object
    });

    console.log(store);

    if (property !== '' && property !== null) {
      if (store[manualString]) { // Check if key exists in object
        delete store[manualString]; // Remove existing entry
      }

      // Convert property to appropriate type
      let formattedProperty: string | number | boolean;
      if (typeof property === 'string') {
        formattedProperty = `"${property}"`;
      } else if (typeof property === 'number') {
        formattedProperty = property; // Number remains as is
      } else if (typeof property === 'boolean') {
        formattedProperty = property; // Boolean remains as is
      } else {
        formattedProperty = property.toString(); // Convert other types to string
      }

      store[manualString] = { name: manualString, value: formattedProperty }; // Add or update entry
    } else {
      if (store[manualString]) {
        delete store[manualString]; // Remove existing entry if value is empty
      }
    }

    // Convert object back to array
    this.storeConfig = Object.keys(store).map(key => store[key]);

    this.storeConfig.forEach(item => {
      switch (item.name) {
        case 'toastrTimeOut':
          this.configService.toastrTimeOut = item.value;
          break;
        case 'fontFamily':
          this.configService.fontFamily = item.value;
          break;
        case 'fontSize':
          this.configService.fontSize = item.value;
          break;
        case 'progressBarAnimation':
          if (typeof item.value === 'string') {
            const modifiedValue = item.value.replace(/^"(.*)"$/, '$1'); // Remove surrounding double quotes
            this.configService.progressBarAnimation = modifiedValue;
          }
          break;
        case 'removeProgressBar':
          this.configService.removeProgressBar = item.value;
          break;
        case 'removeButton':
          this.configService.removeButton = item.value;
          break;
        case 'removeBackgrounds':
          this.configService.removeBackgrounds = item.value;
          break;
        case 'position':
          const position = item.value.replace(/^"(.*)"$/, '$1'); // Remove surrounding double quotes
          this.configService.position = position;
          break;
        case 'positionBottom':
          const positionbottom = item.value.replace(/^"(.*)"$/, '$1'); // Remove surrounding double quotes
          this.configService.position = positionbottom;
          break;
        // Add more cases for other properties as needed
        default:
          break;
      }
    });




  }
  resetToastr(){
    this.storeConfig = [];
    this.toastrTimeOut=5000;
    this.fontFamily='';
    this.fontFamily = '';
    this.progressBarAnimation = false;
    this.removeProgressBar = false;
    this.removeButton = false;
    this.position = '';
    this.positionBottom =''
  }


  trackByFn(index: number) {
    return index;
  }




}
