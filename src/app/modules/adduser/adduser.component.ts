import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { SignupAsyncService } from 'src/app/services/signup-async.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  email : string;
  password : string;
  message: string;
 

  constructor(private studentService: SignupAsyncService) { }

  ngOnInit() {
    
  }

  addStudent(){
    let student = new User();
    student.email = this.email;
    student.password = this.password;
  

    this.studentService.add(student)
      .then(response  => {
        this.message = "User successfully added";
        
      })
      .catch(error =>{
        this.message = "An error has occurred!";
      })
  }

}