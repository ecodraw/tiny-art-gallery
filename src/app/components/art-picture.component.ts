import {Component, Directive} from 'angular2/core';
import {Picture} from '../model/art-model';

@Component({
    selector: 'art-picture',
    inputs: ['picture'],
    host: {
        class: 'pic'
    },
    styleUrls: ['app/components/art-picture.component.css'],
    template: `
        <div class="picture">Name: {{picture.name}} Link: {{picture.link}}</div>
       `
})
export class ArtPicture {
    picture: Picture;
}