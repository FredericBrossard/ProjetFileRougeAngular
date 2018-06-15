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
      'path': '/connexion',
    },
    {
      'id': 1,
      'name': 'Aliments',
      'description': 'Ca va bientôt fonctionner !!!',
      'position': 'header',
      'path': '/aliments',
    },
    {
      'id': 2,
      'name': 'Repas',
      'description': 'Ca va bientôt fonctionner !! !',
      'position': 'header',
      'path': '/repas',
    },
    {
      'id': 3,
      'name': 'Recette',
      'description': 'Page under construction ! !',
      'position': 'header',
      'path': '/recette',
    },
    {
      'id': 4,
      'name': 'Historique',
      'description': 'Page under construction ! !',
      'position': 'header',
      'path': '/historique',
    },
    {
      'id': 5,
      'name': 'Profil',
      'description': 'Page under construction ! !',
      'position': 'header',
      'path': '/profil',
    },
    {
      'id': 6,
      'name': 'Mentions légales',
      'description': 'Page under construction ! !',
      'position': 'footer',
      'path': '/mentions légales',
    },
    {
      'id': 7,
      'name': 'Données personnelles',
      'description': 'Page under construction ! !',
      'position': 'footer',
      'path': '/Données personnelles',
    },

  ];

  getList(position): Menu [] {
    return this.menu.filter(item => item.position === position);
  }


  addRow(tableau) {
    tableau = document.getElementById(tableau);
    // Calcul du nombre de cellule par ligne dans le tableau -> on regarde combien il y a de td dans le premier tr
    const tds = tableau.getElementsByTagName('tr')[0].getElementsByTagName('td').length;

    const tr = document.createElement('tr'); // On créé une ligne
    // On ajoute autant les cellules
    for (let i = 0; i < tds; i ++) {
        const td = document.createElement('td');
        tr.appendChild(td);

        // Si on veut mettre du contenu dans la cellule créée, ça se passe ici (sinon il suffit de supprimer cette ligne)
        td.innerHTML = 'Une nouvelle cellule';
    }

// tslint:disable-next-line:max-line-length
// On ajoute la ligne créée au tableau : attention, sur firefox on peut ajouter directement au tableau, mais IE ajoute par défaut un noeud tbody à la table
    if (tableau.firstChild.tagName === 'tbody') {
        tableau.firstChild.appendChild(tr);
    } else {
        tableau.appendChild(tr);
    }

  }

}
