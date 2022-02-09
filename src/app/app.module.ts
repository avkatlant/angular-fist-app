import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { FooComponent } from './components/foo/foo.component';
import { Foo2Component } from './components/foo2/foo2.component';
import { Foo3Component } from './components/foo3/foo3.component';
import { Foo4Component } from './components/foo4/foo4.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    FooComponent,
    Foo2Component,
    Foo3Component,
    Foo4Component,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
