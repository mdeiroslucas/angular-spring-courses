import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

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
    public dialog: MatDialog
    // private courses?: Array<Course>
  ) {
    this.courses$ = this.coursesService.getAll()
    .pipe(
      catchError(error => {
        this.onError("Os cursos não foram carregados corretamente.")
        return of([]);
      })
    );
  }

  onError(errorMsg: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }
}
