import {Component, Directive} from 'angular2/core';

@Component({
    selector: 'art-image',
    template:`
        <div *ngFor="#name of names"> Value:{{name}}</div>
       `
})
export class ArtImage { 
    names: string[];
    
    
    constructor() {
        this.names = ['Test', 'Bing'];
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