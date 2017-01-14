import {Component, OnInit, NgZone} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {Book} from "../../book";
import {BookService} from "../../book.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers : [ BookService ]
})
export class AuthorComponent implements OnInit {

  private alias;
  private sub;
  
  books: Book[] = [];

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private BookService : BookService,
      private NgZone : NgZone
  ) {

  }

  private dataReload (){
    this.sub = this.route.params.subscribe(params => {
      this.alias = params['author']
    });

    this.BookService.getBooksIfAuthor(this.alias).subscribe(res => {
      this.books = res as Book[];
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {
    /* TODO ask 'double init when .../:author url' (double component object) */


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        this.dataReload();
      }
    })
  }

  public takeFree(book){
    this.BookService.takeBook(book).then(serverBook => {

      /* TODO ask why book = serverBook; not work? how can i $scope.$apply (angular 1.X)*/
      // book = serverBook;
      // this.NgZone.run(() => {});
      book.count = serverBook.count;

    })
  }



  // ngDoCheck(){
  //   console.log('ngDoCheck');
  // }
  //
  // ngOnChanges(){
  //   console.log('ngOnChanges');
  // }
  //
  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked');
  // }
  //
  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit');
  // }
  //
  //
  // ngAfterContentChecked(){
  //   console.log('ngAfterContentChecked');
  // }
  //
  // ngAfterContentInit(){
  //   console.log('ngAfterContentInit');
  // }


  private ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
