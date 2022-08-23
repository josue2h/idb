import { Component, VERSION } from '@angular/core';
import { Student } from './models/Student';
import { SchoolService } from './services/school.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public school$: SchoolService) {
    const e = new Student();
    e.name = 'josue';
    e.lastNames = 'huarachi';
    this.school$.addStudent(e).subscribe();
    this.school$.getList().subscribe((list) => {
      console.log(list);
    });
  }
}
