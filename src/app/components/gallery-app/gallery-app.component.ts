import {Component, Directive} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {GalleryNav} from './gallery-nav/gallery-nav.component';
import {GalleryPage} from './gallery-page/gallery-page.component';

@Component({
    selector: 'gallery-app',
    directives: [GalleryNav, GalleryPage, ROUTER_DIRECTIVES],
    styleUrls: ['app/components/gallery-app/gallery-app.component.css'],
    template:`
        <div class="Cmp">
             <gallery-nav></gallery-nav>
             <router-outlet></router-outlet>
        </div>
       `
})
export class GalleryApp {}
