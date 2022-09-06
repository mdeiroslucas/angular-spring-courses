import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/api/courses';

  constructor(private httpCliente: HttpClient) {}

  getAll() {
    return this.httpCliente.get<Array<Course>>(this.API).pipe(
      take(1), //pode ser: first(),
      // delay(2000),
      tap((courses) => console.log(courses))
    );
  }

  save(course: Course): Observable<Course> {
    return this.httpCliente.post<Course>(this.API, course);
  }
}
