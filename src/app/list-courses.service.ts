import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCoursesService {
  private tabCourses = [
    {
      id: 1,
      intitule: 'Angular',
      author: 'Nidhal Jelassi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      keywords: ['Component', 'Directrive', 'pipe'],
    },
    {
      id: 2,
      intitule: 'Android',
      author: 'Firas Filali',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1200px-Android_logo_2019_%28stacked%29.svg.png',
      keywords: ['Acitivty', 'Intents', 'Views'],
    },
    {
      id: 3,
      intitule: 'Ionic',
      author: 'Foued Zouari',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/LogoIonic.png',
      keywords: ['Page', 'Routing', 'pipe'],
    },
  ];

  addCourse(newCourse) {
    newCourse.id = this.tabCourses[this.tabCourses.length - 1].id + 1;
    console.log(newCourse);

    newCourse['keywords'] = newCourse['keywords'].split(',');
    console.log(newCourse);

    this.tabCourses.push(newCourse);
  }

  getAllCourses() {
    return this.tabCourses;
  }

  getCourseById(id) {
    return this.tabCourses.find((c) => c.id == id);
  }

  deleteCourse(course) {
    this.tabCourses = this.tabCourses.filter((c) => c.id != course.id);
    //console.log(tabCourses);

    // let i = this.tabCourses.indexOf(course);
    // this.tabCourses.splice(i, 1);
  }
  constructor() {}
}
