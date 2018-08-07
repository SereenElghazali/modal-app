import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ContainerComponent } from './container/container.component';
import { OverlyDirectiveDirective } from './overly-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ContainerComponent,
    OverlyDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
