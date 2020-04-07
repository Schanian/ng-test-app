import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector:'parent-component',
    templateUrl:'./parent-component.html'
})
export class  ParentComponent{
// name: string ="";
@Output() OnNameChange: EventEmitter<string> = new EventEmitter<string>();

public nameChanged(event:any){
        this.OnNameChange.emit(event.target.value);
    }
}