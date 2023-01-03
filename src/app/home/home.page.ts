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
    this.tab = this.listCourses.getAllCourses();
  }
}
