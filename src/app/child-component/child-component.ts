import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-component',
    templateUrl: './child-componet.html'
})
export class ChildComponent{
    @Input() name: string ;
}