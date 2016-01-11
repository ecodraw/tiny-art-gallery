import {Component, Directive} from 'angular2/core';

@Component({
    selector: 'art-image',
    inputs: ['image'],
    template:`
        <div *ngFor="#name of names"> Value:{{name}} {{value}}</div>
        <button (click)="bingo()" class="button">Click </button>
       `
})
export class ArtImage { 
    names: string[];
    image: Image;
    value: number; 
    
    constructor() {
        this.names = ['Test', 'Bing'];
        this.image = new Image();
        this.value = this.image.getCount();
    }
    
    bingo(): void{
        this.image.plus();
        this.value = this.image.getCount();
        //alert("Gugus");
    }
}

class Image {
    title: string;
    link: string;
    count: number;
    
    constructor() {
        this.title = 'BlueLove';
        this.link = 'http://www.local.ch';
        this.count = 10;
    }

    getCount(): number{
        return this.count;
    }
    
    plus(): void{
        this.count +=1;
    }
    
    minus(): void{
        this.count -=1;
    }
}

@Component({
    selector: 'gallery-header',
    template:`
        <div>Header</div>
       `
})
export class GalleryHeader { 
    
    
}


@Component({
    selector: 'my-app',
    directives: [ArtImage, GalleryHeader],
    template:`
        <h1>My Art-Gallery</h1>
        <gallery-header>...</gallery-header>
        <art-image> ...</art-image>
        <art-image> ...</art-image>
       `,

})
export class AppComponent { };