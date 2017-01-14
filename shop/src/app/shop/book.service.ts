import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Book} from "./book";

@Injectable()
export class BookService {

  constructor(private http:Http) { }

  headers = new Headers({
    'Content-Type': 'application/json',
  });

  getBooksIfAuthor(authorAlias : string): Observable<Book[]>{
    let url = `http://localhost:3000/api/books?filter[where][author]=${authorAlias}`;
    return this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);

    })
  }

  takeBook(book): Promise<Book>{

    
    //console.log(serverBook);
    
    /*return this.http.put(url, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);

    });*/

    return new Promise((resolve, reject) => {
      let urlGet = `http://localhost:3000/api/books/findOne?filter[where][id]=${book.id}`;
      let urlPut = `http://localhost:3000/api/books/${book.id}`;
      let serverBook : Book;
      let options = {headers: this.headers};

      /* TODO ask API as /book/take-one (GET) return new real book (on server book.count--) */
      /* get real book from server */
      this.http.get(urlGet, options).map(res => res.json()).subscribe(res=>{
        serverBook = res as Book;
        serverBook.count = serverBook.count - 1;
        /* set new count on server */
        this.http.put(urlPut, JSON.stringify(serverBook) , options).subscribe();
        resolve(serverBook);
      });

    });

  }

}
