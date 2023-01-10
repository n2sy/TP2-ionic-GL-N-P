import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tab = [];
  constructor(private listCourses: ListCoursesService) {}
  ngOnInit(): void {
    console.log(this.tab);
    this.tab = this.listCourses.getAllCourses();
  }

  ionViewWillEnter() {
    // console.log('Will Enter');
    // this.tab = this.listCourses.getAllCourses();
    // console.log(this.tab);
  }
}
