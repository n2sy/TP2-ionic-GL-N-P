import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private listCourse: ListCoursesService
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.listCourse.getCourseById(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }
}
