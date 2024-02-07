import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FigurineListPageRoutingModule } from './figurine-list-routing.module';

import { FigurineListPage } from './figurine-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FigurineListPageRoutingModule
  ],
  declarations: [FigurineListPage]
})
export class FigurineListPageModule {}
