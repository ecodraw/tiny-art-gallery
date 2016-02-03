import {Component, Directive} from 'angular2/core';
import {ArtControl} from './art-control/art-control.component';
import {ArtImages} from './art-images/art-images.component';
import {Picture, Collection} from '../../model/art-model';

@Component({
    selector: 'art-app',
    directives: [ArtImages, ArtControl],
    styleUrls: ['app/components/art-app/art-app.component.css'],
    template: `
        <div class="View">
            <art-images [collection]="collection"> ..images..</art-images>
        </div>
        <div class="Control">
            <art-control [collection]="collection"> ..control..</art-control>
        </div>
       `
})
export class ArtApp {
    collection: Collection;

    constructor() {
        this.collection = new Collection();
    }
}