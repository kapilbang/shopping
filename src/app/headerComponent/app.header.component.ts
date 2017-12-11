import { Component,EventEmitter,Output} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./app.header.component.html',
    styleUrls:['./app.header.component.css']
})
export class AppHeaderComponent {

   // @Output() selction = new EventEmitter<string>();

    title:string = "Hello";

    //onSelect(selectedItem){

     //   this.selction.emit(selectedItem);

   // }

}