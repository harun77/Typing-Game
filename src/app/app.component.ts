import { Component } from '@angular/core';
import { lorem } from "faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(value: string){
    this.enteredText = value;
  }

  getClassName(first: string, second: string){
    if(!second) return 'initial';
    return first === second ? 'matched' : 'not-matched';
  }
}
