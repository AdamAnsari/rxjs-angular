import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomObservableComponent } from './modules/custom-observable/custom-observable.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './header/header.component';
import { OfComponent } from './modules/operator/of/of.component';
import { AjaxComponent } from './modules/operator/ajax/ajax.component';
import { FromComponent } from './modules/operator/from/from.component';
import { CountComponent } from './modules/operator/count/count.component';
import { ThrowErrorComponent } from './modules/operator/throw-error/throw-error.component';
import { TimerComponent } from './modules/operator/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomObservableComponent,
    HomeComponent,
    HeaderComponent,
    OfComponent,
    AjaxComponent,
    FromComponent,
    CountComponent,
    ThrowErrorComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
