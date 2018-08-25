// tslint:disable-next-line:quotemark
import { Component, OnInit } from "@angular/core";
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  // templateUrl: './course.component.html',
  template: `
    <!-- email input text -->
    <!-- <input [value] = "email" (keyup.enter)=" email = $event.target.value; onKeyUp()" /> -->
    <input [(ngModel)]="email" />

    <!-- button to click -->
    <button class="btn btn-primary" (click)="saveButtonClick()">Save</button>
`,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'Learn From the Course';
  imageURL =
    'https://i.pinimg.com/originals/91/8b/39/918b3914a245d5407d44693a1c1478e1.jpg';
  courseList;

  email = 'hj2931996@gmail.co';
  isDisabled = true;

  constructor(service: CourseService) {
    this.courseList = service.getCourses();
  }

  ngOnInit() {}

  // saveButtonClick($event) {
  saveButtonClick() {

    // remove below comment to apply the bubble up event
    // event of button click will also cause an event of click on wrapper div of this button
    // $event.stopPropagation();

    console.log('Email: ' + this.email);
  }

  divClick($event) {
    console.log('Div clicked!!', $event);
  }

  onKeyUp() {
  }
}
