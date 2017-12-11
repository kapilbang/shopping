import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name:"trueFalse",pure:false})
export class TrueFalsePipe implements PipeTransform {
    transform(value: boolean) {
        if(value)
        {
            return "Yes";
        }
        else
        {
            return "No"; 
        }
    }

}