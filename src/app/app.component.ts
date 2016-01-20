import {Component, Directive} from 'angular2/core';
import {ArtApp} from './components/art-app.component';
@Component({
    selector: 'gallery-header',
    template:`
        <div>Header</div>
       `
})
export class GalleryHeader {}
@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    directives: [GalleryHeader, ArtApp],
    template:`
        <h1 class="titel">Top</h1>
        <gallery-header>...</gallery-header>
        <art-app>...</art-app>
       `
})
export class AppComponent { };
