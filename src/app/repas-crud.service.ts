import { Injectable } from '@angular/core';
import { Repas } from 'src/app/core/repas';
import { Observable } from '../../node_modules/rxjs/internal/Observable';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepasCRUDService {

  API_URL = 'http://localhost:8090/repas';

  constructor(private http: HttpClient) {

  }

  // create (repas: Repas): Observable<Repas> {
  //   // on fait une copie de l'objet tag. localStorage. EST une fonctionnalité DU NAVIGATEUR qui permet de stoker dans le navigateur
  //   const authoringTag = {...tag, author: localStorage.profiled || '5b432335e523050014867f02'};
  //   return this.http.post<Repas>(this.API_URL, authoringTag);
  // }

  create(repas: Repas ): Observable<Repas> {
    console.log('methode  create : repas.nameRepas:' + repas.nameRepas);
    return this.http.post<Repas>(this.API_URL, repas);
  }
}
