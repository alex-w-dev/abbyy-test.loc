import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ShopComponent} from './shop/shop.component';
import {RouterModule, Routes } from "@angular/router";
import {HomeComponent} from './home/home.component';
import { BooksComponent } from './shop/books/books.component';
import { RoomsComponent } from './shop/rooms/rooms.component';
import { routing, appRoutingProviders } from './app.routes';
import { AuthorComponent } from './shop/books/author/author.component';
import { BookComponent } from './shop/books/author/book/book.component';

@NgModule({
    declarations: [
        AppComponent,
        ShopComponent,
        HomeComponent,
        BooksComponent,
        RoomsComponent,
        AuthorComponent,
        BookComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
