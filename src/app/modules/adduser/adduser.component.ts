import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { SignupAsyncService } from 'src/app/services/signup-async.service';
import { NotificationService } from 'src/app/shared/components/notification.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  email : string;
  password : string;
  message: string;
 

  constructor(private studentService: SignupAsyncService,protected _notificationSvc: NotificationService) { }
  name = 'Angular 6';
  ngOnInit() {
    
  }

  addStudent(){
    let student = new User();
    student.email = this.email;
    student.password = this.password;
  

    this.studentService.add(student)
      .then(response  => {
        this.message = "User successfully added";
        this.sendSuccess() ;
        
      })
      .catch(error =>{
        //this.message = "An error has occurred!";
        this.sendError() ;
      })
  }

  sendInfo() {
    this._notificationSvc.info('Send Info!', 'This is an information', 5000);
  }

  sendSuccess() {
    this._notificationSvc.success('Great Job','Success !', 3000);
  }

  sendWarning() {
    this._notificationSvc.warning('Be careful', "This is a warning !");
  }

  sendError() {
    this._notificationSvc.error('Ups', 'There is an error :(');
  }

  loremIpsum() {
    this._notificationSvc.error('Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.', 10000);
  }

  

}