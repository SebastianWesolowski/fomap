import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private API_URL = '/ingredients';
  constructor(private db: AngularFireDatabase) {}

  getIngredients(): Observable<any> {
    return this.db.list<any>(this.API_URL).snapshotChanges();
  }
}
