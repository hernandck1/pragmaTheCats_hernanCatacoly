import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasinfoCatsPage } from './masinfo-cats.page';

const routes: Routes = [
  {
    path: '',
    component: MasinfoCatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasinfoCatsPageRoutingModule {}
