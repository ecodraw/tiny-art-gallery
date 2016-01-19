import {Component, Directive} from 'angular2/core';

@Component({
    selector: 'art-picture',
    inputs: ['ArtPicture'],
    styleUrls: ['app/components/art-system.css'],
    template:`
        Picture: {{title}}
       `
})
export class ArtPicture {
    title: string;
    link: string;
    constructor(t: string) {
        this.title = t;
        this.link = 'http://www.local.ch';
    }
}


@Component({
    selector: 'art-images',
    directives: [ArtPicture],
    styleUrls: ['app/components/art-system.css'],
    template:`
        <art-picture *ngFor="#pic of pictures">[Picture]={{pic}}</art-picture>
        <div>Value: {{amount}}</div>
        <div class="field">
           <label for="link">Value:</label>
           <input type="number" #inputvalue>
        </div>
        <button (click)="plus()" class="button">+1 </button>
        <button (click)="minus()" class="button">-1 </button>
        <button (click)="plusVal(inputvalue.value)" class="button">add </button>
        <br>
        <br>
       `
})
export class ArtImages {
    names: string[];
    pictures: ArtPicture[];
    amount: number;
    pica: ArtPicture;
    picb: ArtPicture;
    inputvalue: number;
    constructor() {
        this.names = ['BlueWonder', 'RedRose'];
        this.pica = new ArtPicture('Blue');
        this.picb = new ArtPicture('Red');
        this.pictures = [this.pica, this.picb];
        this.amount = 44;
    }
    getCount(): number {
        return this.amount;
    }

    plus(): boolean {
        this.amount += 1;
        return false;
    }

    plusVal(val: number): void {
        this.amount = val;
    }

    minus(): boolean {
        this.amount -= 1;
        return false;
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
    directives: [ArtImages, ArtControl],
    template:`
        <div>Art View</div>
        <art-images> ...</art-images>
        <art-control> ...</art-control>
       `
})
export class ArtSystem {}