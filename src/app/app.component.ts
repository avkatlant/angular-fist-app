import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  expression = false;
  age = 18;

  onSayHi(text: string) {
    console.log(text);
  }
}
