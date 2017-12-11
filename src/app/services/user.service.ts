
import { EventEmitter, Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../shared/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class UserService{
    http: Http;

    dataValue : User[];

    
constructor(http:Http,private httpClient: HttpClient )
{
    this.http = http;
}

getUserData(): Observable<any[]>
{
  
    return this.http.get("https://api.github.com/users").map( (res:Response) => res.json() );


  // this.http.get("http://localhost:8443/getAllData").map((res:Response) => res.json());
 
}



getOneUserData(urlTohit:string): Observable<any>
{
    return this.http.get(urlTohit).map( (res:Response) => res.json() );

}

getMoreData(): Observable<any[]>
{
   // let params: URLSearchParams = new URLSearchParams();

   let params = new HttpParams();
    params.set('since', '60');
  
    return this.httpClient.get( "https://api.github.com/users?since="+60).map( (res:Response) => res.json() );
}


}