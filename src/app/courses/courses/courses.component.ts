import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {

  displayedColumns: Array<string> = ['name', 'category'];
  courses$: Observable<Array<Course>>;

  constructor(
    private coursesService: CoursesService,
    // private courses?: Array<Course>
  ) {
    this.courses$ = this.coursesService.getAll();
  }

  ngOnInit(): void {
    this.courses$ = this.coursesService.getAll();
  }
}
