import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionComponent } from './conversion/conversion.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentsComponent } from './departments/departments.component';
import { FormTypeComponent } from './form-type/form-type.component';
import { FormsComponent } from './forms/forms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'employees',component:ConversionComponent},
  {path:'departments',component:DepartmentsComponent},  
  {path:'forms',component:FormTypeComponent,
    children:[
      {path:'tdf-form',component:FormsComponent},
      {path:'reactive-form',component:ReactiveFormComponent},
    ]
  },
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
export const routingComponent=[ConversionComponent,DepartmentsComponent,FormsComponent,PageNotFoundComponent,DepartmentDetailsComponent,DepartmentContactComponent,DepartmentOverviewComponent,FormTypeComponent,ReactiveFormComponent]
