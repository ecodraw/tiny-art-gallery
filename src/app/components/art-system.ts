import {Component, Directive} from 'angular2/core';


@Component({
    selector: 'art-image',
    styleUrls: ["app/components/art-system.css"],
    inputs: ['image'],
    template:`
        <div *ngFor="#name of names">{{name}}</div>
        <div>Value: {{val}}</div>
        <div class="field">
           <label for="link">Value:</label>
           <input type="number" #inputvalue>
        </div>
        <button (click)="add()" class="button">+1 </button>
        <button (click)="remove()" class="button">-1 </button>
        <button (click)="addValue(inputvalue.value)" class="button">add </button>
        <br>
        <br>
       `
})
export class ArtImage {
    names: string[];
    image: Image;
    val: number;
    inputvalue: number;

    
    constructor() {
        this.names = ['BlueWonder', 'RedRose'];
        this.image = new Image();
        this.val = this.image.getCount();
    }
    
    add(): void{
        this.image.plus();
        this.val = this.image.getCount();
        //alert("Gugus");
    }
    addValue(inputVal: number): void{
        this.image.plusVal(inputVal);
        this.val = this.image.getCount();
        //alert("Gugus");
    }
    
    remove(): void{
        this.image.minus();
        this.val = this.image.getCount();
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
        this.count += 1;
    }
    
    plusVal(val: number): void{
        this.count = val;
    }
    
    minus(): void{
        this.count -= 1;
    }
}


@Component({
    selector: 'art-control',
    template:`
        <div>Art Control</div>
       `
})
export class ArtControl {}


@Component({
    selector: 'art-system',
    directives: [ArtImage, ArtControl],
    template:`
        <div>Art View</div>
        <art-image> ...</art-image>
        <art-control> ...</art-control>
       `
})
export class ArtSystem { 
    
    
}