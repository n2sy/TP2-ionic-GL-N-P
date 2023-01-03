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

  getAllCourses() {
    return this.tabCourses;
  }

  getCourseById(id) {
    return this.tabCourses.find((c) => c.id == id);
  }
  constructor() {}
}
