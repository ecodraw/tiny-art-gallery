import {Component, Directive} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ArtApp} from './components/art-app/art-app.component';
import {ArtImages} from './components/art-app/art-images/art-images.component';
import {ArtImage} from './components/art-app/art-images/art-image/art-image.component';
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
    {path: '/gallery/:id', name: 'Gallery', component: ArtApp},
    {path: '/picture/:id', name: 'Picture', component: ArtApp},
    {path: '/contacts/:id', name: 'Contacts', component: GalleryPage}
])
export class AppComponent {};
