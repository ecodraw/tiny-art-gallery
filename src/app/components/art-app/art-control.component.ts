import {Component, Directive} from 'angular2/core';
import {Collection} from '../../model/art-model';

@Component({
    selector: 'art-control',
    inputs: ['collection'],
    styleUrls: ['app/components/art-control.component.css'],
    template: `
        <div>Control</div>
        <div class="field">
           <label for="link">Value:</label>
           <input type="number" #inputvalue>
        </div>
        <button (click)="plus()" class="button">+1 </button>
        <button (click)="minus()" class="button">-1 </button>
        <button (click)="plusVal(inputvalue.value)" class="button">add </button>
       `
})
export class ArtControl {
    collection: Collection;

    plus(): boolean {
        return false;
    }

    plusVal(val: number): void {
        this.collection.addPicture(val.toString(), 'no');
    }

    minus(): boolean {
        return false;
    }
}
