import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FigurinePage } from './figurine.page';

const routes: Routes = [
  {
    path: '',
    component: FigurinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FigurinePageRoutingModule {}
