import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {


  form!: FormGroup;
  
  constructor(
    private coursesService: CoursesService,
    private snackBar: MatSnackBar
  ) { 
   
  }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
  
  }
  
  onSubmit(){
    this.coursesService.save(this.form.value).subscribe({complete: console.info, error: (e) => this.onError()})
  }
  
  onCancel(){
    
  }

  private onError(): void {
    this.snackBar.open("Erro ao savar curso", '', {duration: 5000});
  }
  
}