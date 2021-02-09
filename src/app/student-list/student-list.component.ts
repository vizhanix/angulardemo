import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { MyServiceService } from 'src/app/service/my-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: Student[];

  constructor(private myService: MyServiceService, public router: Router) { }

  ngOnInit(): void {
    this.myService.getStudents().subscribe(data => {
      this.studentList = data;
    })
  }

  viewStudent(id: number){
    this.router.navigate(['/view',id]);
  }

  editStudent(id: number){
    this.router.navigate(['/edit',id]);
  }

  deleteStudent(id: number){
    this.myService.deleteStudent(id).subscribe(data=> {
        this.router.navigate(['/students']);
      
    });
  }

}
