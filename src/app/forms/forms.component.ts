import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  courses=['Angular','Android','Java','Python','Php']

  userInfo=new UserInfo("Hitesh",'hitesh@mail.com','9604519320','Male','Angular')

  constructor() { }

  ngOnInit(): void {
  }

}
