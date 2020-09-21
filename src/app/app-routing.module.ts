import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { CalculatorComponent } from '../app/calculator/calculator.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path:'', component: HomeComponent },
    { path:'calculator', component: CalculatorComponent},
  ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
