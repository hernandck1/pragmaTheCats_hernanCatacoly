import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-masinfo-cats',
  templateUrl: './masinfo-cats.page.html',
  styleUrls: ['./masinfo-cats.page.scss'],
})
export class MasinfoCatsPage implements OnInit {

  @Input() data: any;

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  
  async cerrarModal() {
    this.modalCtrl.dismiss();
  }


}
