import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  selectedCourse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private listCourse: ListCoursesService,
    private router: Router
  ) {}

  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.selectedCourse = this.listCourse.getCourseById(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Are you sure to delete this course ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.listCourse.deleteCourse(this.selectedCourse);
            this.router.navigateByUrl('/home');
          },
        },
      ],
    });

    await alert.present();
  }
}
