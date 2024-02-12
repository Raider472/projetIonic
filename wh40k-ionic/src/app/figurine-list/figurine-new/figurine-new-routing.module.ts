import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FigurineNewPage } from './figurine-new.page';

const routes: Routes = [
  {
    path: '',
    component: FigurineNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FigurineNewPageRoutingModule {}
