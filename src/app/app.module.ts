import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyServiceService } from './service/my-service.service';
import { ViewStudentComponent } from './view-student/view-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
// import { CreateStudentComponent } from './template-driven/create-student/create-student.component';
// import { UpdateStudentComponent } from './template-driven/update-student/update-student.component';
import { ListStudentComponent } from './template-driven/list-student/list-student.component';
import { TemplateAddStudentComponent } from './template-driven/template-add-student/template-add-student.component';
import { TemplateEditStudentComponent } from './template-driven/template-edit-student/template-edit-student.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

//guard
import { MyGuardGuard } from './guard/my-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    StudentListComponent,
    ViewStudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    // CreateStudentComponent,
    // UpdateStudentComponent,
    ListStudentComponent,
    TemplateAddStudentComponent,
    TemplateEditStudentComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MyServiceService,MyGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
