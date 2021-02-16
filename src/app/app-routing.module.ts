import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {TodoComponent} from "./todo/todo.component";
import {AboutComponent} from "./about/about.component";

// определение маршрутов
const routes: Routes =[

  { path: 'calc', component: CalculatorComponent},
  { path: 'todo', component: TodoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
