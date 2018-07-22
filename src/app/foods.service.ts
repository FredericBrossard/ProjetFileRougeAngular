// import { FoodsService } from './foods.service';
import { Injectable } from '@angular/core';
import { Foods } from './foods_group';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FoodsService {


  constructor(private http: HttpClient) {
    this.getAllFoods();
    // this.getFoodById(this.id);
    // this.getFoodByName(this.name);
  }


  public request = new XMLHttpRequest();
  //  public selectedGroup: AutoComplFoodsGroup;
  public id: number;
  public name: string;

  API_URL = 'http://localhost:8090/foods';

  getFoodByName(f: string): Observable<Foods> {
    return this.http.get<Foods>('http://localhost:8090/foods' + '/' + f);
  }
  getAllFoods(): Observable<Foods[]> {
    return this.http.get<Foods[]>('http://localhost:8090/foods');
  }

  delete (foodAliment: Foods ): Observable<Foods> {
   console.log('methode  delete : foodAliment.id:' + foodAliment.id );

    return this.http.delete<Foods>(this.API_URL + '/' + foodAliment.id);
  }

  update (foodAliment: Foods ): Observable<Foods> {
    console.log('methode  update : foodAliment.id:' + foodAliment.id );
    return this.http.put<Foods>(this.API_URL + '/' + foodAliment.id, foodAliment);
  }

  create(foodAliment: Foods ): Observable<Foods> {
    console.log('methode  create : foodAliment.name:' + foodAliment.name );
    return this.http.post<Foods>(this.API_URL, foodAliment);
  }
}
