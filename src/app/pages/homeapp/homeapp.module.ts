import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeappPageRoutingModule } from './homeapp-routing.module';

import { HomeappPage } from './homeapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeappPageRoutingModule
  ],
  declarations: [HomeappPage]
})
export class HomeappPageModule {}
