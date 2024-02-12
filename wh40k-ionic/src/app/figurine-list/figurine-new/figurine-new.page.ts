import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FigurineListService } from 'src/app/services/figurine-list.service';
import { Figurine } from 'src/app/models/figurine.model';

@Component({
  selector: 'app-figurine-new',
  templateUrl: './figurine-new.component.html',
  styleUrls: ['./figurine-new.component.scss'],
})
export class FigurineNewPage implements OnInit {
  public figurine!: Figurine;

  constructor(
    private Figurine: FigurineListService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.figurine = new Figurine();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouvelle figurine enregistré dans votre liste !',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/figurine-list']);
      }, 2000);
    });
  }

  add() {
    this.Figurine.saveNewFigurine(this.figurine).subscribe(() => {
      this.figurine = new Figurine();
      this.presentToast();
    });
  }
}
