import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FigurinePageRoutingModule } from './figurine-routing.module';

import { FigurinePage } from './figurine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FigurinePageRoutingModule
  ],
  declarations: [FigurinePage]
})
export class FigurinePageModule {}
