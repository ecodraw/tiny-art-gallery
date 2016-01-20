import {Component, Directive} from 'angular2/core';
import {ArtPicture} from './art-picture.component';
import {Picture, Collection} from '../../app/model/art-model';

@Component({
    selector: 'art-images',
    directives: [ArtPicture],
    inputs: ['collection'],
    styleUrls: ['app/components/art-app.css'],
    template: `
        <art-picture *ngFor="#picture of collection.pictures"[picture]="picture"></art-picture>
        <div>Value: {{amount}}</div>
        <br>
        <br>
       `
})
export class ArtImages {
    collection: Collection;
    amount: number;
    inputvalue: number;

    constructor() {
        this.amount = 44;
    }

    getCount(): number {
        return this.amount;
    }
}