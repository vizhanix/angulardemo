import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/model/student.model';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-template-add-student',
  templateUrl: './template-add-student.component.html',
  styleUrls: ['./template-add-student.component.css']
})
export class TemplateAddStudentComponent implements OnInit{

  private _student: Student = {
    id: null,
    firstname:'',
    lastname:'',
    standard:null
  };

  get student(): Student {
    return this._student;
  }

  @ViewChild('addForm') public myRef : NgForm;


  set student(value: Student) {
    this.student.firstname = value.firstname,
      this.student.lastname = value.lastname,
      this.student.standard = value.standard
  }

  constructor( private myService: MyServiceService) { }

  ngOnInit(): void {
  }

  saveStudent(){
    this.myService.saveStudent(this.student).subscribe(data=>{
      console.log(data);
      
    });
    
  }

}
