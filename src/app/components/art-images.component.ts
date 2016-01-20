import {Component, Directive} from 'angular2/core';
import {ArtPicture} from './art-picture.component';
import {Picture} from '../../app/model/art-model';

@Component({
    selector: 'art-images',
    directives: [ArtPicture],
    styleUrls: ['app/components/art-app.css'],
    template: `
        <art-picture *ngFor="#picture of pictures"[picture]="picture"></art-picture>
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
            new Picture('Red', 'www.b'),
            new Picture('Green', 'www.c')
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