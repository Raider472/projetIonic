import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FigurineNewPageRoutingModule } from './figurine-new-routing.module';

import { FigurineNewPage } from './figurine-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FigurineNewPageRoutingModule
  ],
  declarations: [FigurineNewPage]
})
export class FigurineNewPageModule {}
