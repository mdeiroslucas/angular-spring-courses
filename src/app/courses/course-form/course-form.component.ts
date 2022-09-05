import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });
  }
  
  ngOnInit(): void {
  }
  
  onSubmit(){
    
  }
  
  onCancel(){
    
  }
  
}


// this.form = new FormGroup({
//   name: new FormControl(null, Validators.required),
//   category: new FormControl(null, Validators.required)
// });