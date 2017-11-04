

import {Injectable} from '@angular/core';
import {ITeams} from './equipos';
import {ICatalogo} from './equipos';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()

export class ProductService{
private _url='http://localhost:8000/products/';


constructor(private _http: HttpClient){
 
}

getProducts(): Observable<ITeams[]>{
    return this._http.get<ITeams[]>(this._url).do(data=>console.log('Data' +JSON.stringify(data))).catch(this.handleError);
}


deleteProducts(id:ITeams): Observable<ITeams[]>{    
    return this._http.delete<ITeams[]>(this._url+"/"+id).do(data=>console.log('Data' +JSON.stringify(data))).catch(this.handleError);
}

postProduct(body:ICatalogo):Observable<ICatalogo>{
    return this._http.post(this._url,body).do(data=>console.log('Data' + JSON.stringify(data))).catch(this.handleError)
}


private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);   
}

//postProducts(){}
//putProducts(){}
//deleteProducts(){}

}

