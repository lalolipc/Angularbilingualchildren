import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/common/custom-validators';
import { User } from 'src/app/models/user';
import { SignupAsyncService } from 'src/app/services/signup-async.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  message: string = '';

  studentForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    email: new FormControl('',),// [ Validators.required, Validators.email, CustomValidators.forbiddenWords(/mail.com/) ], [ CustomValidators.emailExists(this.studentService) ]

  });

  constructor(private studentService: SignupAsyncService) { }

  ngOnInit() {

  }

  get password() { return this.studentForm.get('password'); }

  get email() { return this.studentForm.get('email'); }

  onSubmit() {
    let student = new User();
    student.password = this.password.value

    student.email = this.email.value;
    this.message = "Please, wait a few seconds...";

    this.studentService.add(student)
      .then(response => {
        this.message = "Student successfully added";
      })
      .catch(error => {
        this.message = "An error has occurred!";
      })
  }
}