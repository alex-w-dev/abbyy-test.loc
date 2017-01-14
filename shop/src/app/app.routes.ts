import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import { BooksComponent } from './shop/books/books.component';
import { RoomsComponent } from './shop/rooms/rooms.component';
import { AuthorComponent } from './shop/books/author/author.component';
import { BookComponent } from './shop/books/author/book/book.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'shop', component: ShopComponent,
        children: [
            { path: '', redirectTo: 'books', pathMatch: 'full' },
            {
                path: 'books',
                component: BooksComponent,
                children : [
                    {
                        path: ':author',
                        component: AuthorComponent,
                        children : [
                            {
                                path: ':book',
                                component: BookComponent
                            }
                        ]
                    }
                ]
            },
            { path: 'rooms', component: RoomsComponent }
        ]
    }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);