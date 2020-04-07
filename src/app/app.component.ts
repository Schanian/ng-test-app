import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  nameUpdate(event){
    // this.name = event.target.value;
    // this.name=event.target.value;
    console.log("The value App  ",event);
    return event.target.value;
  }

//   OnNameChange(val: string){
//       this.name = val;
//   }
// }
