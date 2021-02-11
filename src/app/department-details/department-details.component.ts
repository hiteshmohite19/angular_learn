import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router" 

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  departmentId:any;
  constructor(public activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id=(this.activatedRoute.snapshot.paramMap.get('id'))
    this.departmentId=id
  }

  overview(){
    this.router.navigate(['department-overview'],{relativeTo:this.activatedRoute})
  }

  contact(){
    this.router.navigate(['department-contact'],{relativeTo:this.activatedRoute})
  }


  back(){
    let selectedId=this.departmentId ? this.departmentId : null
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.activatedRoute}) 
  }

}
