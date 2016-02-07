import {Component, Directive} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ArtApp} from './components/art-app/art-app.component';
import {GalleryPage} from './components/gallery-app/gallery-page/gallery-page.component';
import {GalleryApp} from './components/gallery-app/gallery-app.component';

@Component({
    selector: 'app',
    styleUrls: ['app/app.component.css'],
    directives: [GalleryApp, ArtApp],
    template:`
        <h1 class="titel">Top</h1>
        <gallery-app></gallery-app>
       `
})
@RouteConfig([
    {path: '/art', name: 'Art', component: ArtApp, useAsDefault: true},
    {path: '/contacts', name: 'Contacts', component: GalleryPage}
])
export class AppComponent {};
