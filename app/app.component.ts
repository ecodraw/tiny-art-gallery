import {Component, Directive} from 'angular2/core';
import {ArtSystem} from 'app/components/art-system';
@Component({
    selector: 'gallery-header',
    template:`
        <div>Header</div>
       `
})
export class GalleryHeader {}
@Component({
    selector: 'my-app',
    directives: [GalleryHeader, ArtSystem],
    template:`
        <h1>My Art-Gallery</h1>
        <gallery-header>...</gallery-header>
        <art-system> ...</art-system>
       `,

})
export class AppComponent { };
