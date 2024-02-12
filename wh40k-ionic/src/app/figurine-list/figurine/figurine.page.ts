import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FigurineListService } from 'src/app/services/figurine-list.service';
import { Figurine } from 'src/app/models/figurine.model';

@Component({
  selector: 'app-figurine',
  templateUrl: './figurine.component.html',
  styleUrls: ['./figurine.component.scss'],
})
export class FigurinePage implements OnInit {
  modif: boolean = false;
  figurine!: Figurine;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Figurine: FigurineListService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Figurine.get(id).subscribe((value: any) => {
      this.figurine = value;
    });
  }

  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header : 'Êtes vous sur de vouloir modifier cet élément ?',
        subHeader: 'Vous rendrez possible la modification de cet élément',
        buttons : [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Configurer',
            handler: () => {this.modif = !this.modif}
          }
        ]
      });
      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications ont été enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Figurine.update(this.figurine).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Figurine.delete(id);
    this.router.navigate(['/figurine-list']);
  }
}
