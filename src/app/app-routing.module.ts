import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionComponent } from './conversion/conversion.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'employees',component:ConversionComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'departments/:id',component:DepartmentDetailsComponent,
    children:[
      {path:'department-overview',component:DepartmentOverviewComponent},
      {path:'department-contact',component:DepartmentContactComponent}
    ]
  },
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ConversionComponent,DepartmentsComponent,PageNotFoundComponent,DepartmentDetailsComponent,DepartmentContactComponent,DepartmentOverviewComponent]
