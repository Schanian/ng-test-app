import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name: string ;
  title = 'test-app';

  OnNameChange(val: string){
      this.name = val;
  }
}
