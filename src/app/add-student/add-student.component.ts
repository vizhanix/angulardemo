import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../model/student.model';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addForm: FormGroup;

  student: Student = {
    id: null,
    firstname:'',
    lastname:'',
    standard:null
  };

  constructor(private formBuilder: FormBuilder, private myService: MyServiceService) {

    this.addForm = formBuilder.group({
      firstname: ['', [Validators.minLength(5), Validators.maxLength(10), Validators.required]],
      lastname: ['', Validators.required],
      standard: ['', Validators.required],
    });

  }

  ngOnInit(): void { }

  formSubmit() {

    this.student.firstname =this.addForm.get('firstname').value;
    this.student.lastname = this.addForm.get('lastname').value;
    this.student.standard = this.addForm.get('standard').value;

    this.myService.saveStudent(this.student).subscribe(data =>{
      console.log(data);
      
    });
  }

}
