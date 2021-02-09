import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../model/student.model';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  private id: number;

  student: Student;

  constructor(private activatedRoute: ActivatedRoute, private myService: MyServiceService) {
    this.activatedRoute.params.subscribe(data => {
      this.id = data.id;
    });

    this.myService.getStudentById(this.id).subscribe(data=>{
      this.student = data;
    });

   }

  ngOnInit(): void {
  }



}
