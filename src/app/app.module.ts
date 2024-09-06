import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterForm1Component } from './register-form1/register-form1.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ClockComponent } from './clock/clock.component';
import { TodolistComponent } from './todolist/todolist.component';
import { WeatherComponent } from './weather/weather.component';
import { CalendorComponent } from './calendor/calendor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { FormattingPipe } from './formatting.pipe';
import { AiComponent } from './ai/ai.component';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { TodoService } from './todo.service';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};


@NgModule({
  declarations: [
    AppComponent,
    RegisterForm1Component,
    LoginComponent,
    WelcomeComponent,
    HomeComponent,
    CalculatorComponent,
    ClockComponent,
    TodolistComponent,
    WeatherComponent,
    CalendorComponent,
    DashboardComponent,
    FormattingPipe,
    AiComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
    
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
