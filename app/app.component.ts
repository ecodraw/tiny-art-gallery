import {Component, Directive} from 'angular2/core';

@Component({
    selector: 'art-image',
    template:`
        <h2> My Image</h2>
       `
})
export class ArtImage { }


@Component({
    selector: 'my-app',
    directives: [ArtImage],
    template:`
        <h1> My Art-Gallery</h1>
        <art-image>...</art-image>
       `,

})
export class AppComponent { };