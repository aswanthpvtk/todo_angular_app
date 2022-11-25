import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { ViewAlltodoComponent } from './view-alltodo/view-alltodo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';


const myroute:Routes =[

  {
    path :"",
    component :AddtodoComponent
  },
  {
    path :"v",
    component: ViewAlltodoComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    ViewAlltodoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
