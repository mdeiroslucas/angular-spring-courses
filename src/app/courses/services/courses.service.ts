import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private readonly API = "/assets/acourses.json"

  constructor(private httpCliente: HttpClient) {}

  getAll() {
    return this.httpCliente.get<Array<Course>>(this.API)
    .pipe(
      take(1), //pode ser: first(),
      delay(2000),
      tap(courses => console.log(courses))
    );
  }
}
