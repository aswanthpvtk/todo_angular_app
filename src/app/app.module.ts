import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { ViewAlltodoComponent } from './view-alltodo/view-alltodo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

const myRoutes:Routes=[
  {
    path:"v",
    component:ViewAlltodoComponent
  },
  {
    path:"",
    component:AddtodoComponent
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
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
