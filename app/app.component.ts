import {Component, Directive} from 'angular2/core';

@Component({
    selector: 'art-image',
    inputs: ['image'],
    template:`
        <div *ngFor="#name of names">{{name}}</div>
        <div>Value: {{value}}</div>
        <button (click)="add()" class="button">+1 </button>
        <button (click)="remove()" class="button">-1 </button>
        <br>
        <br>
       `
})
export class ArtImage { 
    names: string[];
    image: Image;
    value: number; 
    
    constructor() {
        this.names = ['BlueWonder', 'RedRose'];
        this.image = new Image();
        this.value = this.image.getCount();
    }
    
    add(): void{
        this.image.plus();
        this.value = this.image.getCount();
        //alert("Gugus");
    }
    remove(): void{
        this.image.minus();
        this.value = this.image.getCount();
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
    selector: 'art-control',
    template:`
        <div>Art Control</div>
       `
})
export class ArtControl { 
    
    
}

@Component({
    selector: 'art-view',
    directives: [ArtImage, ArtControl],
    template:`
        <div>Art View</div>
        <art-image> ...</art-image>
        <art-control> ...</art-control>
       `
})
export class ArtView { 
    
    
}

@Component({
    selector: 'my-app',
    directives: [GalleryHeader, ArtView],
    template:`
        <h1>My Art-Gallery</h1>
        <gallery-header>...</gallery-header>
        <art-view> ...</art-view>
       `,

})
export class AppComponent { };