import { Component } from '@angulara/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector:'parent-component',
    templateUrl:'./parent-component.html'
})
export class  ParentComponent{
// name: string ="";
@Output() OnNameChange: EventEmitter<string> = new EventEmitter<string>();

    nameChanged(event){
        // this.name=event.target.value;
        this.OnNameChange.emit(event.target.value);
        console.log("The value Parent ",event);
    }
}