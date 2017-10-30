import {Injectable} from '@angular/core'
import {User} from '../user'
import {Http, RequestOptionsArgs, RequestOptions, RequestMethod} from '@angular/http'
import {Observable} from 'rxjs/Rx'

import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
    static api: string='http://localhost:3000/api/chirps'
    options: RequestOptions
    constructor(private http: Http){}

    getUsers(): Observable<any>{
        return this.http
            .get(UserService.api)
            .map(r => r.json());
    }

    getUser(id: string): Observable<any> {
        return this.http
            .get(`${UserService.api}/${id}`)
            .map(r => r.json());
    }

    create(chirp: { user:string, message:string }){
        return this.http.post(UserService.api, chirp)
        .map(r => r.text())
            
    }

    delete(id:string){
        return this.http.delete(`${UserService.api}/${id}`)
            .map(r => r.text());
    }
}
