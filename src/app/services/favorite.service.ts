import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FavoriteService {
  favorites: Array<string>;

  constructor(private dishservice: DishService) {
    this.favorites = [];
  }

  isFavorite(id: number): boolean {
    return this.favorites.some(el => el === id.toString());
  }

  addFavorite(id: number): boolean {
    if (!this.isFavorite(id)) {
      this.favorites.push(id.toString());
    }
    return true;
  }

  getFavorites(): Observable<Dish[]> {
    return this.dishservice
      .getDishes()
      .pipe(
        map(dishes =>
          dishes.filter(dish =>
            this.favorites.some(el => el === dish.id.toString())
          )
        )
      );
  }

  deleteFavorite(id: string): Observable<Dish[]> {
    let index = this.favorites.indexOf(id.toString());
    if (index >= 0) {
      this.favorites.splice(index, 1);
      return this.getFavorites();
    } else {
      return throwError('Deleting non-existant favorite');
    }
  }
}
