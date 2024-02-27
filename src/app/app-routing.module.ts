import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import { CreatestudentComponent } from './components/createstudent/createstudent.component';}


const routes: Routes = [
  { path: '', redirectTo: 'view-student', pathMatch: 'full' },  
  { path: 'view-student', component: CreatestudentComponent },  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
