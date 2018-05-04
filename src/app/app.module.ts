import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgComponentsVmejiaModule } from 'ng-components-vmejia';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgComponentsVmejiaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
