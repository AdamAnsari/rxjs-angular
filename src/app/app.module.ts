import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomObservableComponent } from './modules/custom-observable/custom-observable.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './header/header.component';
import { OfComponent } from './modules/operator/of/of.component';
import { AjaxComponent } from './modules/operator/ajax/ajax.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomObservableComponent,
    HomeComponent,
    HeaderComponent,
    OfComponent,
    AjaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
