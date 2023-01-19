import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { MasinfoCatsPage } from 'src/app/modal/masinfo-cats/masinfo-cats.page';
import { DatabaseappService } from 'src/app/services/databaseapp.service';
import { ResponseAPICats } from '../../interfaces/';

@Component({
  selector: 'app-homeapp',
  templateUrl: './homeapp.page.html',
  styleUrls: ['./homeapp.page.scss'],
})
export class HomeappPage implements OnInit {


  isItemAvailable = false;
  itemsCats: any = [];
  dataCats: any = [];
  existdatacats: boolean = false;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public DB: DatabaseappService,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      spinner: 'lines-sharp',
      mode: 'ios',
      backdropDismiss: false,
      cssClass: "loaderFull",
    });
    loading.present();

    this.DB.getCats().subscribe((resp) => {
      this.dataCats = resp;
      for (let k = 0; k < this.dataCats.length; k++) {
        this.dataCats[k]['search'] = this.dataCats[k]['origin'] + ' ' + this.dataCats[k]['temperament'] + ' ' + this.dataCats[k]['name'] + ' ' + this.dataCats[k]['search'];
        this.dataCats[k]['imageUrl'] = `https://cdn2.thecatapi.com/images/${this.dataCats[k]['reference_image_id']}.jpg`;
      }
      this.itemsCats = this.dataCats;
      this.existdatacats = this.dataCats.length > 0 ? true : false;
      loading.dismiss();
    })
  }

  initializeItems() {
    this.itemsCats = this.dataCats;
  }

  getItemsCats(ev: any) {
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.isItemAvailable = true;
      this.itemsCats = this.itemsCats.filter((item: any) => {
        return ((item.name).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  async masInfo(info: any) {
    const modal = await this.modalCtrl.create({
      component: MasinfoCatsPage,
      mode: 'ios',
      componentProps: {
        data: info
      },
      breakpoints: [0.80, 0.99],
      initialBreakpoint: 0.80,
    });
    return await modal.present();
  }

  async salir() {
    const alert = await this.alertCtrl.create({
      cssClass: 'alertas',
      mode: 'ios',
      message: '<b>¿Está seguro que desea cerrar sesión?</b>',
      buttons: [
        {
          text: 'No',
          handler: async () => {
          }
        },
        {
          text: 'Si',
          handler: async () => {
            this.cleanCloseSession();
          }
        }
      ]
    });
    await alert.present();
  }

  async cleanCloseSession() {
    this.router.navigate(['login'], { replaceUrl: true });
  }

}
