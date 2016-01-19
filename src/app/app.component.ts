import {Component, Directive} from 'angular2/core';
import {ArtSystem} from './components/art-system';
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
    directives: [GalleryHeader, ArtSystem],
    template:`
        <h1 class="titel">Top</h1>
        <div id="hugo">Hugo</div>
        <gallery-header>...</gallery-header>
        <art-system>...</art-system>
       `
})
export class AppComponent { };
