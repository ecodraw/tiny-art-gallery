import {Component, Directive} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ArtApp} from '../../art-app/art-app.component';

@Component({
    selector: 'gallery-nav',
    directives: [ArtApp, ROUTER_DIRECTIVES],
    styleUrls: ['app/components/gallery-app/gallery-nav/gallery-nav.component.css'],
    template: `
        <nav>
        <a [routerLink]="['Contacts']">Contacts</a>
        <a [routerLink]="['Art']">Art</a>
        </nav>
        <router-outlet></router-outlet>
        <p>Nav</p>
       `
})
@RouteConfig([
    { path: '/', name: 'Contacts', component: ArtApp, useAsDefault: true },
    { path: '/art', name: 'Art', component: ArtApp }
])
export class GalleryNav { }