import {Component, Directive} from 'angular2/core';
import {GalleryNavi} from './gallery-nav/gallery-nav.component';
import {GalleryPage} from './gallery-page/gallery-page.component';

@Component({
    selector: 'gallery-app',
    styleUrls: ['app/components/gallery-app/gallery-app.component.css'],
    template:`
        <div class="Cmp">
            <p>Header pre</p>
            <gallery-navi></gallery-navi>
            <p>Header past</p>
            <gallery-page></gallery-page>
        </div>
       `
})
export class GalleryApp {}
