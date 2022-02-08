import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  phone = '9379992';
  user = {
    name: 'John',
    surname: 'Doe'
  };

  boldText = `<b>I am a bold text</b>`;

  login = '';
  password = '';

  constructor() {
  }

  get fullName() {
    return this.user.name + ' ' + this.user.surname;
  }

  ngOnInit(): void {
    setTimeout(() => this.updatePhone(), 3000);
  }

  updatePhone() {
    this.phone = Math.round(Math.random() * 1000000) + '';
  }

  onInput(event: Event, num: number, str: string) {
    const target = event.target as HTMLInputElement;
    this.phone = target.value;
  }

  onSubmit() {
    if (this.login && this.password) {
      // TODO Submit
      this.login = this.password = '';
      alert('It\'s OK!');
      return;
    }
    alert('login and password ?');
  }

}
