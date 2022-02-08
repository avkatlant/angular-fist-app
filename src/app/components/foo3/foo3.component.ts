import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-foo3',
  templateUrl: './foo3.component.html',
  styleUrls: ['./foo3.component.scss']
})
export class Foo3Component implements OnInit {

  @Input('fooBar') foo = 'foo';

  @Input()
  title = 'Title';

  @Input()
  name?: string; // если может не прийти значение

  @Input()
  counter = 0;

  @Output()
  counterChange = new EventEmitter<number>();

  @Output()
  sayHi = new EventEmitter<string>();

  constructor() {
    // тут ещё нет доступа к @Input()
  }

  ngOnInit(): void {
    // тут есть доступ к @Input()
  }

  onSayHi() {
    // TODO Emit event
    this.sayHi.emit(this.title + ' Hello');
  }

}
