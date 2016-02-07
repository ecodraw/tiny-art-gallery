import {Component, Directive} from 'angular2/core';
import {GalleryNav} from './gallery-nav/gallery-nav.component';
import {GalleryPage} from './gallery-page/gallery-page.component';

@Component({
    selector: 'gallery-app',
    directives: [GalleryNav, GalleryPage],
    styleUrls: ['app/components/gallery-app/gallery-app.component.css'],
    template:`
        <div class="Cmp">
             <gallery-nav></gallery-nav>
            <gallery-page></gallery-page>
        </div>
       `
})
export class GalleryApp {}
