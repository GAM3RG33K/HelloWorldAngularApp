import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title  = 'Learn From the Course';
  imageURL  = 'https://i.pinimg.com/originals/91/8b/39/918b3914a245d5407d44693a1c1478e1.jpg';
  courseList;


  constructor(service: CourseService ) {
    this.courseList = service.getCourses();
  }

  ngOnInit() {
  }

}
