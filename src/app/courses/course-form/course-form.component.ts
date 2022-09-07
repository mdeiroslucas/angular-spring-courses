import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common'
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
    private snackBar: MatSnackBar,
    private location: Location
  ) { 
   
  }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
  
  }
  
  onSubmit(): void {
    this.coursesService.save(this.form.value).subscribe({next: (n) => this.onSuccess() , error: (e) => this.onError()})
  }
  
  onCancel(): void {
    this.location.back();
  }

  private onSuccess(): void {
    this.snackBar.open("Curso salvo com sucesso", '', {duration: 5000});
    this.onCancel();
  }

  private onError(): void {
    this.snackBar.open("Erro ao savar curso", '', {duration: 5000});
  }
  
}