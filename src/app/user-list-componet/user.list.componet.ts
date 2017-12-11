import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "../shared/user.model";
import { UserService } from "../services/user.service";


@Component({
    selector:'usernew-app-componet',
    templateUrl:'./user.list.componet.html',
    styleUrls:['./user.list.componet.css']
})
export class UserListComponent implements OnInit,OnDestroy
{

    dataList : User[];

    dataListUser:any[];

    toShow:boolean;

    singleUser:any;
    ngOnDestroy(): void {
        
    }
    ngOnInit(): void {
        this.toShow = false;

     this.userList.getUserData().subscribe(data => {console.log(data);this.dataListUser=data}   );

    


    // this.userList.getOneUserData().subscribe(data => console.log(data) );
     //console.log(this.dataList);
    }

    constructor(private userList : UserService)
    {
            
    }

    showData(value:any)
    {
        
        this.userList.getOneUserData(value.url).subscribe(data => { this.toShow = true; console.log(data);this.singleUser=data} );
    }


    getMoreData()
    {
        this.userList.getMoreData().subscribe(data => {

            this.dataListUser.push(...data);

        });
    }

}