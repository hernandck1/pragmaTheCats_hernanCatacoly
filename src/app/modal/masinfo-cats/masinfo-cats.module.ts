import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasinfoCatsPageRoutingModule } from './masinfo-cats-routing.module';

import { MasinfoCatsPage } from './masinfo-cats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasinfoCatsPageRoutingModule
  ],
  declarations: [MasinfoCatsPage]
})
export class MasinfoCatsPageModule {}
