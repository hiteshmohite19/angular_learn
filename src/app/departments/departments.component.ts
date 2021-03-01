import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  private departmentId:any
  departments=[
    {'id':1,'name':'Angular'},
    {'id':2,'name':'Android'},
    {'id':3,'name':'Java'},
    {'id':4,'name':'Python'},
    {'id':5,'name':'Php'},
  ]

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      let id=params['id']
      this.departmentId=parseInt(id)
    })
  }

  onSelect(d:any){
    this.router.navigate([d.id],{relativeTo:this.activatedRoute})
  }

  isSelected(d:any){
    return this.departmentId===d.id
  }

}
