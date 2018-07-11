import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';





@Component({
  selector: 'app-aliments',
  templateUrl: './aliments.component.html',
  styleUrls: ['./aliments.component.css'],


})

export class AlimentsComponent {



  settings = {
    actions: {
      position: 'right',
      columnTitle: '',

      delete: {
        // deleteButtonContent: 'Supprimer',
        confirmDelete: true,
        deleteButtonContent: '  <span class="glyphicon glyphicon-remove table-actions-button"></span>  ',
        mode: 'external'
      },
      add: {
        // addButtonContent: 'Ajouter',
        confirmCreate: true,
        addButtonContent: '<span class="glyphicon glyphicon-plus">'
      },
      edit: {
        confirmSave: true,
        editButtonContent: '<span class="glyphicon glyphicon-pencil"></span>'
      },
    },
    setPaging: true,

    pager: {
      display: true,
    },
    columns: {
      nameAliment: {
        title: 'Aliment',
        editable: true,
        sort: true,
        width: '30%',
        filter: true,
        editor: {
          type: 'textarea',
        },
      },
      ig: {
        title: 'IG (pour 100gr)   ',
        editable: true,
        filter: false,
      },
      portion: {
        title: 'Portion (en gr)',
        editable: true,
        filter: false,
      },
      glucides: {
        title: 'Glucides',
        editable: true,
        filter: false,

      },
      cg: {
        title: 'CG',
        editable: false,
        filter: false,
      },
      energie: {
        title: 'Energie',
        editable: false,
        filter: false,
      },
      proteines: {
        title: 'Proteines',
        editable: false,
        filter: false,
      },
      lipides: {
        title: 'Lipides',
        editable: false,
        filter: false,
      },
      commentaires: {
        title: 'Commentaires',
        editable: true,
        editor: {
          type: 'textarea',
        },
        width: '30%',
        filter: false,
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
    this.calculateCg(event.newData);
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
    this.source.refresh();
  }

  onCreateConfirm(event) {
    this.calculateCg(event.newData);
    if (window.confirm('Are you sure you want to create   ?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
    this.source.refresh();
  }

  onEditConfirm(event) {
    this.calculateCg(event.newData);
  }

  calculateCg(object) {
    // object.cg = 1;
    object.cg = (object.ig * (object.glucides * object.portion) / 100) / 100;
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'nameAliment',
        search: query
      },
      {
        field: 'ig',
        search: query
      },

    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }





}

