import {Directive,HostListener,HostBinding} from '@angular/core'
@Directive({
    selector:'[appDropDown]'
})
export class DropDownDir{

    @HostBinding('class.open') openDrop = false;

    @HostListener('click') toggleButtonOpen()
    {
            this.openDrop = !this.openDrop;
    }

}