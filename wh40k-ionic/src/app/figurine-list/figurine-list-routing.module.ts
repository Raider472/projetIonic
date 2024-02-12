import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FigurineListPage } from './figurine-list.page';

const routes: Routes = [
  {
    path: '',
    component: FigurineListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./figurine-new/figurine-new.module').then( m => m.FigurineNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./figurine/figurine.module').then( m => m.FigurinePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FigurineListPageRoutingModule {}
