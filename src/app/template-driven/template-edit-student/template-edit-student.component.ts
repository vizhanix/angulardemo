import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-template-edit-student',
  templateUrl: './template-edit-student.component.html',
  styleUrls: ['./template-edit-student.component.css']
})
export class TemplateEditStudentComponent implements OnInit {

  private id: number;
  private _student: Student = {
    id: null,
    firstname:'',
    lastname:'',
    standard:null
  };

  get student(): Student {
    return this._student;
  }

  set student(value: Student) {
    this.student.firstname = value.firstname,
      this.student.lastname = value.lastname,
      this.student.standard = value.standard
  }

  constructor(private activatedRoute: ActivatedRoute, private myService: MyServiceService) {


    this.activatedRoute.params.subscribe(data => {
      this.id = data.id;
      console.log(this.id);

      this.myService.getStudentById(this.id).subscribe(data => {
        this.student = data;
        console.log(this.student.firstname);

      });

    });

  }

  editStudent() {
    this.myService.editStudent(this.student, this.student.id).subscribe(data => {
      console.log(data);

    });
  }



  ngOnInit(): void {
  }

}
