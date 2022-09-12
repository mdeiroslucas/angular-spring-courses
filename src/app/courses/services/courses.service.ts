import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, take, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/api/courses';

  constructor(private httpCliente: HttpClient) {}

  getAll(): Observable<Course[]> {
    return this.httpCliente.get<Array<Course>>(this.API).pipe(
      take(1), //pode ser: first(),
      // delay(2000),
      tap((courses) => console.log(courses))
      );
  }

  loadById(id: string) {
    return this.httpCliente.get<Course>(`${this.API}/${id}`);
  }

  save(course: Course): Observable<Course> {
    if(course._id){
      return this.update(course);
    }
    return this.create(course);
  }
  
  private create(course: Course) {
    return this.httpCliente.post<Course>(this.API, course).pipe(first());
  }
  
  private update(course: Course) {
    return this.httpCliente.put<Course>(`${this.API}/${course._id}`, course).pipe(first());

  }
}
