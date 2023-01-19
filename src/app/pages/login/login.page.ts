import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AlertController, MenuController, ModalController, Platform, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { DatabaseappService } from 'src/app/services/databaseapp.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: any = [];
  faCoffee = faCoffee;
  faPass = faLock;
  faUser = faUser;
  faIdCard = faIdCard;
  faEnvelope = faEnvelope;
  userLogin: any = [];
  userIs: any = [];
  dataNitEHB: any = [];
  hide = true;

  constructor(
    public router: Router,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public DB: DatabaseappService,
    public plt: Platform,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController
  ) {
  }

  ngOnInit() {
    moment.locale('es');
  }



  async IniSession(data: any) {

    if ((!data.mail) || (!data.pass)) {

      this.router.navigate(['login'], { replaceUrl: true });

      const alert = await this.alertCtrl.create({
        mode: 'ios',
        cssClass: 'alertas',
        subHeader: 'Datos errados',
        message: 'Por favor verifique la información suministrada',
        buttons: ['Aceptar']
      });
      await alert.present();

    }
    else {
      if (data.pass === environment.login.pass && data.mail === environment.login.mail) {
        const toast = await this.toastCtrl.create({
          mode: 'md',
          message: `Bienvenido <b>${environment.login.name.replace(/(^|[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(?:([a-záéíóúüñ])|([A-ZÁÉÍÓÚÜÑ]))|([A-ZÁÉÍÓÚÜÑ]+)/gu, c => c.toUpperCase())}</b>!!!`,
          position: 'bottom',
          duration: 3500,
          cssClass: 'toastLogin'
        });
        toast.present();
        this.router.navigate(['homeapp'], { replaceUrl: true });
      }
      else {
        this.router.navigate(['login'], { replaceUrl: true });

        const alert = await this.alertCtrl.create({
          mode: 'ios',
          cssClass: 'alertas',
          subHeader: 'Datos incorrectos',
          message: 'Por favor verifique la información suministrada.',
          buttons: ['Aceptar']
        });
        await alert.present();

      }
    }

  }


}
