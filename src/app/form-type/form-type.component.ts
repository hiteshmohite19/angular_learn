import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router'

@Component({
  selector: 'app-form-type',
  templateUrl: './form-type.component.html',
  styleUrls: ['./form-type.component.css']
})
export class FormTypeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
