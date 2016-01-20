import {Component, Directive} from 'angular2/core';
import {ArtControl} from './art-control.component';
import {ArtImages} from './art-images.component';
import {Picture, Collection} from '../../app/model/art-model';

@Component({
    selector: 'art-app',
    directives: [ArtImages, ArtControl],
    styleUrls: ['app/components/art-app.component.css'],
    template: `
        <div class="View">
            <art-images [collection]="collection"> ...</art-images>
        </div>
        <div class="Control">
            <art-control [collection]="collection"> ...</art-control>
        </div>
       `
})
export class ArtApp {
    collection: Collection;

    constructor() {
        this.collection = new Collection();
    }
}