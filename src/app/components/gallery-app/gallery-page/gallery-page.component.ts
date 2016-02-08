import {Component, Directive} from 'angular2/core';
import {RouteParams} from 'angular2/router';


@Component({
    selector: 'gallery-page',
    template: `
        <h1>myPage no: {{id}}</h1>
       `
})
export class GalleryPage {
    id: string;
    constructor(private routeParams: RouteParams) {
        this.id = routeParams.get('id');
    }
}
