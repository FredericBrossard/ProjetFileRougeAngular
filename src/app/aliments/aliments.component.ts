import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';





const tomate = {
  nameFood: 'Tomate',
  ig: 10,
  portion: 10,
  glucides: 10,
  cg: 10,
  energie: 10,
  proteines: 10,
  lipides: 10,
  commentaires: ''
};

// const ELEMENT_DATA: AlimentsTable[] = [
//   tomate,
//   tomate,
// ];



@Component({
  selector: 'app-aliments',
  templateUrl: './aliments.component.html',
  styleUrls: ['./aliments.component.css'],
//   template: `
//   <ng2-smart-table
//     [settings]="settings"
//     [source]="source"
//     (deleteConfirm)="onDeleteConfirm($event)"
//     (editConfirm)="onSaveConfirm($event)"
//     (createConfirm)="onCreateConfirm($event)"></ng2-smart-table>
// `

})

export class AlimentsComponent {


  settings = {
    Supprimer: {
      confirmDelete: true,
    },
    Ajouter: {
      confirmCreate: true,
    },
    Modifier: {
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'ID',
        editable: false,
      },
      name: {
        title: 'Full Name',
        editable: true,
        sort: true,
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
    },
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      notShownField: true,

    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      notShownField: true,
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      notShownField: false,
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      notShownField: false,
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      notShownField: false,
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      notShownField: false,
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      notShownField: false,
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      notShownField: true,
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      notShownField: false,
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      notShownField: false,
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
      notShownField: true,
    }
  ];

  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }







  // displayedColumns: string[] = ['nameFood', 'ig', 'portion', 'glucides', 'cg', 'energie', 'proteines', 'lipides', 'commentaires' ];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);



  // typeMeal = [
  //   {value: 'petitdej-0', viewValue: 'Petit-Dejeuner'},
  //   {value: 'dej-1', viewValue: 'Dejeuner'},
  //   {value: 'diner-2', viewValue: 'Diner'}
  // ];

  // addRow () {
  //   ELEMENT_DATA.push(tomate);
  //   this.dataSource._updateChangeSubscription();
  // }


}

