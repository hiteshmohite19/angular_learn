import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator, UserNameValidator } from '../Validators/reactive-form-validators'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userDetails!: FormGroup;
  
  constructor(private formBuilder:FormBuilder) { }

  get userDetailsControl() {
    return this.userDetails.controls;
  }


  ngOnInit(): void {
    this.userDetails=this.formBuilder.group({
      username:['Hitesh',[Validators.required,Validators.minLength(5),UserNameValidator(/admin/)]],
      password:['1234'],
      email:[''],
      checkbox:[false],
      confirmPassword:[''],
      address:this.formBuilder.group({
        street:['street'],
        landmark:['landmark'],
      })
    },{validator:PasswordValidator})

    this.userDetailsControl.checkbox?.valueChanges.subscribe(checked=>{
      const email=this.userDetailsControl.email
      
      if(checked){
        email.setValidators(Validators.required)
      }
      else{
        email.clearValidators()
      }
      email.updateValueAndValidity()
    })
  }

}
