import {Component, Directive} from 'angular2/core';
import {Picture} from '../../app/model/art-model';

@Component({
    selector: 'art-picture',
    inputs: ['picture'],
    host: {
        class: 'pic'
    },
    styleUrls: ['app/components/art-app.css'],
    template: `
        <div class="pic">Name: {{picture.name}} Link: {{picture.link}}</div>
       `
})
export class ArtPicture {
    picture: Picture;
}