import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Figurine } from '../models/figurine.model';

@Injectable({
  providedIn: 'root'
})
export class FigurineListService {
  private dbPath = '/figurines';
  figurineRef!: AngularFirestoreCollection<Figurine>;

  constructor(private db: AngularFirestore) { 
    this.figurineRef = db.collection(this.dbPath);
  }

  getAll() : any {
    return this.figurineRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewFigurine(figurine: Figurine) : any {
    return new Observable(obs => {
      this.figurineRef.add({...figurine}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.figurineRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(figurine: Figurine) {
    return new Observable(obs => {
      this.figurineRef.doc(figurine.id).update(figurine);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`figurines/${id}`).delete();
  }
}

