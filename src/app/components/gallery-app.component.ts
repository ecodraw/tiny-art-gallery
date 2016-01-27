import {Component, Directive} from 'angular2/core';
import {GalleryNav} from './gallery-nav.component';
import {GalleryPage} from './gallery-page.component';

@Component({
    selector: 'gallery-app',
    styleUrls: ['app/components/gallery-app.component.css'],
    template:`
        <div class="Cmp">
            <p>Header</p>
            <gallery-nav>...</gallery-nav>
        </div>
       `
})
export class GalleryApp {}