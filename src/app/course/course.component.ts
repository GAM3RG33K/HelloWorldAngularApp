import { CourseService } from './course.service';
// tslint:disable-next-line:quotemark
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-course',
  // templateUrl: './course.component.html',
  template: `
    <div (click)="divClick($event)">
      <button class="btn btn-primary" (click)="saveButtonClick($event)" >Save</button>
    </div>
`,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'Learn From the Course';
  imageURL =
    'https://i.pinimg.com/originals/91/8b/39/918b3914a245d5407d44693a1c1478e1.jpg';
  courseList;

  isDisabled = true;

  constructor(service: CourseService) {
    this.courseList = service.getCourses();
  }

  ngOnInit() {}

  saveButtonClick($event) {

    // remove below comment to apply the bubble up event
    // event of button click will also cause an event of click on wrapper div of this button
    $event.stopPropagation();

    console.log('Save button clicked!!', $event);
  }

  divClick($event) {
    console.log('Div clicked!!', $event);
  }
}
