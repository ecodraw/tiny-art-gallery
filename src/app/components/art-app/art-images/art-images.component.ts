import {Component, Directive} from 'angular2/core';
import {ArtPicture} from '../art-picture/art-picture.component';
import {ArtImage} from './art-image/art-image.component';
import {Picture, Collection} from '../../../model/art-model';

@Component({
    selector: 'art-images',
    directives: [ArtImage, ArtPicture],
    inputs: ['collection'],
    host: {
        class: 'images'
    },
    styleUrls: ['app/components/art-app/art-images/art-images.component.css'],
    template: `
        <art-picture *ngFor="#picture of collection.pictures"[picture]="picture"></art-picture>
        <art-image>. img .</art-image>
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