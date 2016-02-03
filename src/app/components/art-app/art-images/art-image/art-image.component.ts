import {Component, Directive} from 'angular2/core';
import {Picture, Collection} from '../../../../model/art-model';

@Component({
    selector: 'art-image',
    inputs: ['collection', 'picture'],
    styleUrls: ['app/components/art-app/art-images/art-image/art-image.component.css'],
    template: `
         <div class="view viewbeta">
            <img (click)="back()" [src]="link()" />
         </div>
       `
})
export class ArtImage {
    collection: Collection;
    picture: Picture;

    link(): string {
        return '../../resources/images/' + this.picture.link;
    }

    back() {
        this.collection.setImage('e');
    }
}