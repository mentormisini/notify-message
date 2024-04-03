# Toastr-Notify

## Check Demo
https://toastr-notify.netlify.app/

## Installation:
>`npm i toastr-notify@latest`

>Angular animations are required for this library. If you haven't already installed Angular animations, you can do so by running:
> 
>npm i @angular/animations
 
 ## Setup
After installation, in your app module, you need to import MToastrModule. You can either import it directly or configure it according to your preferences.

>MToastrModule
>
Or, if you want to configure it:
> MToastrModule.withConfig({
>     
> here you can place your configuration
> 
> the interface is 
> 
>closeButton: true,
> 
>toastrTimeOut:5000, // set timeout be aware using milliseconds
> 
>fontFamily:"Arial", // set your desired font
> 
>fontSize:15, // set your desired size
> 
>progressBarAnimation:'increase', // or decrease
> 
>removeProgressBar:false,
> 
>removeButton:false,
> 
>removeBackgrounds:false,
> 
>position: "end",
>    })),


## How to use in components
Inject the ToastrNotifyService in your component's constructor:
> constructor(private toasterService: ToastrNotifyService)
>
To display messages, simply use one of the following methods:
> 
>   this.toasterService.showSuccess("place your message here");

 Methods: 
<ul>
<li>showSuccess</li>
<li>showInfo</li>
<li>showWarning</li>
<li>showDanger</li>
</ul>

In your HTML file, place the following code at the top
>  <lib-toastr-notify></lib-toastr-notify>

## Support
If you encounter any difficulties during implementation or wish to collaborate, please contact us at www.mentormisini.com
