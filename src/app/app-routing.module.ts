import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IndexComponent} from './index/index.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'calculator/:id',
    component: CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
