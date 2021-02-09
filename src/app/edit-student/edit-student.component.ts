import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../model/student.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  private id: number;

  private student: Student;

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private myService: MyServiceService) {

    this.editForm = formBuilder.group({
      firstname: ['', [Validators.minLength(5), Validators.maxLength(10), Validators.required]],
      lastname: ['', Validators.required],
      standard: ['', Validators.required],
    });

    this.activatedRoute.params.subscribe(data => {
      this.id = data.id;
      console.log(this.id);

      this.myService.getStudentById(this.id).subscribe(data => {
        this.student = data;
        console.log(this.student.firstname);

        this.setTheValue();

      });

    });
  }

  setTheValue() {
    this.editForm.controls['firstname'].setValue(this.student.firstname);
    this.editForm.controls['lastname'].setValue(this.student.lastname);
    this.editForm.controls['standard'].setValue(this.student.standard);
  }

  editformSubmit() {

    this.student.firstname = this.editForm.get('firstname').value;
    this.student.lastname = this.editForm.get('lastname').value;
    this.student.standard = this.editForm.get('standard').value;

    this.myService.editStudent(this.student, this.student.id).subscribe(data => {
      console.log(data);

    });
  }


  ngOnInit(): void { }

}
