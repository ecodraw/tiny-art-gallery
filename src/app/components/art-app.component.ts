import {Component, Directive} from 'angular2/core';
import {ArtControl} from './art-control.component';
import {ArtImages} from './art-images.component';
import {Picture, Collection} from '../../app/model/art-model';

@Component({
    selector: 'art-app',
    directives: [ArtImages, ArtControl],
    template: `
        <div>View</div>
        <art-images [collection]="collection"> ...</art-images>
        <art-control [collection]="collection"> ...</art-control>
       `
})
export class ArtApp {
    collection: Collection;

    constructor() {
        this.collection = new Collection();
    }
}