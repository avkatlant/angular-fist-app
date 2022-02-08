import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-foo4',
  templateUrl: './foo4.component.html',
  styleUrls: ['./foo4.component.scss']
})
export class Foo4Component {

  @Input()
  template?: TemplateRef<{ $implicit: number }>;

}
