import {Component, Directive} from 'angular2/core';
import {ArtApp} from './components/art-app.component';
import {GalleryApp} from './components/gallery-app.component';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    directives: [GalleryApp, ArtApp],
    template:`
        <h1 class="titel">Top</h1>
        <gallery-app>...</gallery-app>
        <art-app>...</art-app>
       `
})
export class AppComponent {};
