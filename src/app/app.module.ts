import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreatestudentComponent } from './components/createstudent/createstudent.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';  
// import {DataTablesModule} from 'angular-datatables';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CreatestudentComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    // ReactiveFormsModule,  
    // HttpClientModule,  
    // DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
