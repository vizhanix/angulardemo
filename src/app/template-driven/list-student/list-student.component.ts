import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  studentList: Student[];

  constructor(private myService: MyServiceService, public router: Router) { }

  ngOnInit(): void {

    this.myService.getStudents().subscribe(data => {
      this.studentList = data;
    })

  }

  viewStudent(id: number) {
    this.router.navigate(['/view', id]);
  }

  editStudent(id: number) {
    this.router.navigate(['/templateedit', id]);
  }

  deleteStudent(id: number) {
    this.myService.deleteStudent(id).subscribe(data => {
      console.log("STUDENT DELETED !");
      

    });
  }

}
