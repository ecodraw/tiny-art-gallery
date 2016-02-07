import {Component, Directive} from 'angular2/core';

@Component({
    selector: 'gallery-navi',
    styleUrls: ['app/components/gallery-app/gallery-nav/gallery-nav.component.css'],
    template: `
        <div class="Cmp">
        <p>Nav</p>
        <h1>djdfjf</h1>
        <p>Nav2</p>
        </div>
       `
})
export class GalleryNavi { }

/*
@RouteConfig([
    
    import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
    import {ArtApp} from '../../art-app/art-app.component';
    
     directives: [ArtApp, ROUTER_DIRECTIVES, RouterOutlet],
    
    { path: '/contacts', name: 'Contacts', component: ArtApp },
    { path: '/contacts', name: 'Art', component: ArtApp }
    
            <a [routerLink]="['Contacts']">Contacts</a>
        <a [routerLink]="['Art']">Art</a>
        <router-outlet></router-outlet>
])*/