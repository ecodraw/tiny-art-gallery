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
        <art-picture [hidden]="isShown()" *ngFor="#picture of collection.pictures" 
        [picture]="picture" [collection]="collection"></art-picture>
        <art-image [hidden]="!isShown()" [picture]="theSelected()" [collection]="collection"></art-image>
       `
})
export class ArtImages {
    collection: Collection;
    picture: Picture;

    isShown(): boolean {
        return this.collection.isDetailShown();
    }
    theSelected():  Picture {
        return this.collection.selectedPicture;
    }
}