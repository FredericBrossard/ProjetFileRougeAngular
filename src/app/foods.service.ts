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



  getFoodByName(f: string): Observable<Foods> {
    return this.http.get<Foods>('http://localhost:8090/foods' + '/' + f);
  }
  getAllFoods(): Observable<Foods[]> {
    return this.http.get<Foods[]>('http://localhost:8090/foods');
  }
}
