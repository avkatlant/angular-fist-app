import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input()
  title = 'before init parent';

  constructor() {
    console.log('ParentComponent.constructor', this.title);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ParentComponent.ngOnChanges', changes, this.title);
  }

  ngOnInit(): void {
    console.log('ParentComponent.ngOnInit', this.title);
  }

  ngDoCheck() {
    console.log('ParentComponent.ngDoCheck', this.title);
  }

  ngAfterContentInit() {
    console.log('ParentComponent.ngAfterContentInit', this.title);
  }

  ngAfterContentChecked() {
    console.log('ParentComponent.ngAfterContentChecked', this.title);
  }

  ngAfterViewInit() {
    console.log('ParentComponent.ngAfterViewInit', this.title);
  }

  ngAfterViewChecked() {
    console.log('ParentComponent.ngAfterViewChecked', this.title);
  }

  ngOnDestroy() {
    console.log('ParentComponent.ngOnDestroy', this.title);
  }

}
