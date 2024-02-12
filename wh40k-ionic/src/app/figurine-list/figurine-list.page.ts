import { Component, OnInit } from '@angular/core';
import { FigurineListService } from '../services/figurine-list.service';
import { Figurine } from '../models/figurine.model';

@Component({
  selector: 'app-figurine-list',
  templateUrl: './figurine-list.page.html',
  styleUrls: ['./figurine-list.page.scss'],
})
export class FigurineListPage implements OnInit {
  figurines!: Array<Figurine>;

  constructor(private figurine: FigurineListService) { }

  ngOnInit(): void {
    this.figurine.getAll().subscribe((data: any) => {
      this.figurines = data;
    });
  }
}

