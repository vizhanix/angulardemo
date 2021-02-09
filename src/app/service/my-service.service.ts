import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('http://localhost:7777/rest-student/student');
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>('http://localhost:7777/rest-student/student' + `/${id}`);
  }

  saveStudent(student: Student): Observable<Student>{
    return this.httpClient.post<Student>('http://localhost:7777/rest-student/student', student,
    {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  })
}

editStudent(student: Student, id: number): Observable<Student>{
  return this.httpClient.put<Student>('http://localhost:7777/rest-student/student' + `/${id}` , student,
  {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
})
}


deleteStudent(id: number){
  return this.httpClient.delete('http://localhost:7777/rest-student/student' + `/${id}` );
}

}
