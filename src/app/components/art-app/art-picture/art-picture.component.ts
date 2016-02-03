import {Component, Directive} from 'angular2/core';
import {Picture, Collection} from '../../../model/art-model';

@Component({
    selector: 'art-picture',
    inputs: ['picture', 'collection'],
    host: {
        class: 'pic'
    },
    styleUrls: ['app/components/art-app/art-picture/art-picture.component.css'],
    template: `
         <div class="view viewbeta">
            <img [src]="getLink()"/>
            <div class="mask">
                <h2>Hover {{picture.name}}</h2>
                <p>A wonderful serenity has taken this days</p>
                <a (click)="setPicture()" href="#" class="info">{{picture.link}}</a>
            </div>
         </div>
       `
})
export class ArtPicture {
    picture: Picture;
    collection: Collection;

    constructor() {
        this.picture = null;
    }

    setPicture(): void {
        this.collection.setImage('222');
    }
    getLink(): string {
        return '../resources/images/' + this.picture.link;
    }
}