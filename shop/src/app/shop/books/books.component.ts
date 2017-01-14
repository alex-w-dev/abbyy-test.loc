import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../author.service";
import {Author} from "../author";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers : [AuthorService]
})
export class BooksComponent implements OnInit {

  authors: Author[] = [];

  constructor(private authorService : AuthorService) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(res => {
      this.authors = res as Author[];
    }, err => {
      console.log(err);
    });
  }

}
