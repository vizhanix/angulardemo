import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ViewStudentComponent } from './view-student/view-student.component';


import { ListStudentComponent } from './template-driven/list-student/list-student.component';
import { TemplateAddStudentComponent } from './template-driven/template-add-student/template-add-student.component';
import { TemplateEditStudentComponent } from './template-driven/template-edit-student/template-edit-student.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MyGuardGuard } from './guard/my-guard.guard';
import { MyCanDeactivateGuard } from './guard/my-can-deactivate.guard';


const routes: Routes = [
  {path:'', redirectTo: '/students', pathMatch:'full'},
  {path:'checkout', component: CheckoutComponent},
  {path:'view/:id', component: ViewStudentComponent},
  {path:'add', component: AddStudentComponent, canActivate:[MyGuardGuard]},
  {path:'edit/:id', component: EditStudentComponent},
  {path:'students', component: StudentListComponent},

  //template-driven forms example
  {path:'templatelist', component: ListStudentComponent, canActivate:[MyGuardGuard]},
  {path:'templateadd', component: TemplateAddStudentComponent, canDeactivate:[MyCanDeactivateGuard]},
  {path:'templateedit/:id', component: TemplateEditStudentComponent},

  { path: "**", component: PagenotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
