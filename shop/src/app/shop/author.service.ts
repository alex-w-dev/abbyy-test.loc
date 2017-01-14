import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Author} from "./author";

@Injectable()
export class AuthorService {

  constructor(private http: Http) { }

  headers = new Headers({

    'Content-Type': 'application/json',
  })

  getAuthors(): Observable<Author[]>{

    let url = "http://localhost:3000/api/authors";
    return this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    });
  }

}
