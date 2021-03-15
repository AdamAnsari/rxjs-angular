import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomObservableComponent } from './modules/custom-observable/custom-observable.component';
import { HomeComponent } from './modules/home/home.component';
import { AjaxComponent } from './modules/operator/ajax/ajax.component';
import { FromComponent } from './modules/operator/from/from.component';
import { OfComponent } from './modules/operator/of/of.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'custom-observable', component: CustomObservableComponent },
  { path: 'of-operator', component: OfComponent },
  { path: 'ajax-operator', component: AjaxComponent },
  { path: 'from-operator', component: FromComponent },

  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
