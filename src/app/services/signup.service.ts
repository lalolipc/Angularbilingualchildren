/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }
}
*/

//student.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList = new Array<User>();
  private studentId = 0;

  constructor() { } 

  getAll(){
    return this.studentList;
  }

  getById(studentId: number){
    let students = this.studentList.filter(student => {
      return student.id == studentId;
    });

    return (students.length > 0) ? students[0] : null;
  }
  
  add(student: User){
    this.studentId++;
    student.id = this.studentId;
    this.studentList.push(student);
  }
}
