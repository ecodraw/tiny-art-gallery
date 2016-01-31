import {Component, Directive} from 'angular2/core';
import {Picture} from '../../../../model/art-model';

@Component({
    selector: 'art-image',
    styleUrls: ['app/components/art-app/art-images/art-image/art-image.component.css'],
    template: `
         <div class="vview">
            <img src="../../resources/images/preview_default.jpg" />
         </div>
       `
})
export class ArtImage {
    abc: string;
}