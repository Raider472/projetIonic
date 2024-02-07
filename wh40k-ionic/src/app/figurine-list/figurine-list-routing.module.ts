import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FigurineListPage } from './figurine-list.page';

const routes: Routes = [
  {
    path: '',
    component: FigurineListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FigurineListPageRoutingModule {}
