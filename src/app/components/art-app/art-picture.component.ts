import {Component, Directive} from 'angular2/core';
import {Picture} from '../../model/art-model';

@Component({
    selector: 'art-picture',
    inputs: ['picture'],
    host: {
        class: 'pic'
    },
    styleUrls: ['app/components/art-picture.component.css'],
    template: `
         <div class="view viewbeta">
            <img src="../resources/images/preview_default.jpg" />
            <div class="mask">
                <h2>Hover {{picture.name}}</h2>
                <p>A wonderful serenity has taken this days</p>
                <a href="#" class="info">{{picture.link}}</a>
            </div>
         </div>
       `
})
export class ArtPicture {
    picture: Picture;
}