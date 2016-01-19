import {Component, Directive} from 'angular2/core';

class Picture {
    name: string;
    link: string;

    constructor(name: string, link: string) {
        this.name = name;
        this.link = link;
    }
}

@Component({
    selector: 'art-picture',
    inputs: ['picture'],
    host: {
        class: 'pic'
    },
    styleUrls: ['app/components/art-system.css'],
    template: `
        <div>Picture: {d{picture.name}}</div>
       `
})
export class ArtPicture {
    picture: Picture;
}

@Component({
    selector: 'art-images',
    directives: [ArtPicture],
    styleUrls: ['app/components/art-system.css'],
    template: `
        <art-picture *ngFor="#picture of pictures">[picture]="picture"</art-picture>
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
    pictures: Picture[];
    amount: number;
    inputvalue: number;
    
    constructor() {
        this.pictures = [
            new Picture('Blue', 'www.a'),
            new Picture('Red', 'www.b')
        ];
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
    template: `
        <div>Control</div>
       `
})
export class ArtControl { }


@Component({
    selector: 'art-system',
    directives: [ArtImages, ArtControl],
    template: `
        <div>View</div>
        <art-images> ...</art-images>
        <art-control> ...</art-control>
       `
})
export class ArtSystem { }