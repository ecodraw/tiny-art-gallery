import {Component, Directive} from 'angular2/core';
import {ArtControl} from './art-control';
import {ArtImages} from './art-images';

@Component({
    selector: 'art-app',
    directives: [ArtImages, ArtControl],
    template: `
        <div>View</div>
        <art-images> ...</art-images>
        <art-control> ...</art-control>
       `
})
export class ArtApp { }