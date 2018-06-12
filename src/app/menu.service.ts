import { Menu } from './menu';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {
    this.selectedMenu = this.menu[0];

  }
  public selectedMenu: Menu;

  menu: Menu[] = [

    {
      'id': 0,
      'name': 'Connexion',
      'description': 'Page under construction !',
      'position': 'header',
    },
    {
      'id': 1,
      'name': 'Aliments',
      'description': 'Ca va bientôt fonctionner !!!',
      'position': 'header',
    },
    {
      'id': 2,
      'name': 'Repas',
      'description': 'Ca va bientôt fonctionner !! !',
      'position': 'header',
    },
    {
      'id': 3,
      'name': 'Recette',
      'description': 'Page under construction ! !',
      'position': 'header',
    },
    {
      'id': 4,
      'name': 'Historique',
      'description': 'Page under construction ! !',
      'position': 'header',
    },
    {
      'id': 5,
      'name': 'Profil',
      'description': 'Page under construction ! !',
      'position': 'header',
    },
  ];

  getList(position): Menu [] {
    return this.menu.filter(item => item.position === position);
  }

}
