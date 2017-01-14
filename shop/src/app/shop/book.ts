/**
 * Created by Alexander on 13.01.2017.
 */
export class Book{
    constructor (
        public id?:string,
        public title?:string,
        public author?:string,
        public alias?:string,
        public pages?: number,
        public count?: number,
        public img?: string

    ){

    }
}
