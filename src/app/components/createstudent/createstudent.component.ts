import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Student } from '../../student'; 

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrl: './createstudent.component.css'
})
export class CreatestudentComponent implements OnInit{

  constructor(private studentservice:StudentService) { }  
  
  student : Student=new Student();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  studentsaveform=new FormGroup({  
    student_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    student_email:new FormControl('',[Validators.required,Validators.email]),  
    student_branch:new FormControl()  
  });  
  
  createStudent(createStudent){  
    this.student=new Student();   
    this.student.student_name=this.StudentName?.value;
      
    this.student.student_name=this.StudentName.value;  
    this.student.student_email=this.StudentEmail.value;  
    this.student.student_branch=this.StudentBranch.value;  
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.studentservice.createStudent(this.student)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.student = new Student();  
  }  
  
  get StudentName(){  
    return this.studentsaveform.get('student_name');  
  }  
  
  get StudentEmail(){  
    return this.studentsaveform.get('student_email');  
  }  
  
  get StudentBranch(){  
    return this.studentsaveform.get('student_branch');  
  }  
  
  addStudentForm(){  
    this.submitted=false;  
    this.studentsaveform.reset();  
  }  
}  