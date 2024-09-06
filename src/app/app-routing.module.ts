import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalendorComponent } from './calendor/calendor.component';
import { TodolistComponent } from './todolist/todolist.component';
import { WeatherComponent } from './weather/weather.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClockComponent } from './clock/clock.component';
import { AiComponent } from './ai/ai.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"dash",component:DashboardComponent},
      {path:"calculator",component:CalculatorComponent},
      {path:"calender",component:CalendorComponent},
      {path:"todo",component:TodolistComponent},
      {path:"weather",component:WeatherComponent},
      {path:"dash",component:DashboardComponent},
      {path:"clock",component:ClockComponent},
      {path:"ai",component:AiComponent},
      {path:"",component:CalculatorComponent,pathMatch:'full'},
    

  {path:"login",component:LoginComponent},
  {path:"welcome",component:WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
