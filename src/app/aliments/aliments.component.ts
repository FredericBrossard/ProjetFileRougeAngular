import { FoodsGroup } from './../foods_group';

import { FoodsService } from './../foods.service';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Foods, ListFoods } from '../foods_group';





@Component({
  selector: 'app-aliments',
  templateUrl: './aliments.component.html',
  styleUrls: ['./aliments.component.css'],


})

export class AlimentsComponent implements OnInit {

foodsGroups = [];

  // settings = {

  //     position: 'right',
  //     columnTitle: '',

  //     delete: {
  //       // deleteButtonContent: 'Supprimer',
  //       confirmDelete: true,
  //       deleteButtonContent: '  <span class="glyphicon glyphicon-remove table-actions-button"></span>  ',
  //       mode: 'external'
  //     },
  //     add: {
  //       // addButtonContent: 'Ajouter',
  //       confirmCreate: true,
  //       addButtonContent: '<span class="glyphicon glyphicon-plus">'
  //     },
  //     edit: {
  //       confirmSave: true,
  //       mode: 'inline',
  //       editButtonContent: '<span class="glyphicon glyphicon-pencil"></span>'
  //     },

  //   setPaging: true,

  //   pager: {
  //     display: true,
  //   },
  //   columns: {
  //     id: {
  //       title: 'Identifiant',
  //       editable: false,
  //       sort: true,
  //       filter: true,
  //     },
  //     name: {
  //       title: 'Aliment',
  //       editable: true,
  //       sort: true,
  //       width: '30%',
  //       filter: true,
  //       editor: {
  //         type: 'textarea',
  //       },
  //     },
  //     // categorie: {
  //     //   title: 'Catégorie',
  //     //   editable: true,
  //     //   sort: true,
  //     //   filter: true,
  //     //   type: 'list',
  //     //   config: {
  //     //   list: [{title: 'Lion King', value: '1'}, {title: 'The Matrix', value: '2'}]}
  //     // },
  //   //   categorie: {
  //   //     title: 'Catégorie',
  //   //     editable: true,
  //   //     sort: true,
  //   //     filter: {
  //   //       type: 'completer',
  //   //       config: {
  //   //         completer: {
  //   //         data: this.foodsGroups,
  //   //         searchFields: 'name',
  //   //         titleField: 'name'
  //   //        }
  //   //     }
  //   //   }
  //   // },
  //   categorie: {
  //     title: 'Catégorie',
  //     editor: {
  //       type: 'list',
  //       config: {
  //           selectText: 'Select...',
  //           list: this.foodsService.listGroup,
  //       },
  //   },
  //      filter: {
  //       type: 'list',
  //       config: {
  //         selectText: 'Select...',
  //         list:  this.foodsService.listGroup,
  //     }
  //   },
  // },
  //     glycIndex: {
  //       title: 'IG (pour 100gr)   ',
  //       editable: true,
  //       filter: false,
  //     },
  //     energie: {
  //       title: 'Energie',
  //       editable: false,
  //       filter: false,
  //     },
  //     // portion: {
  //     //   title: 'Portion (en gr)',
  //     //   editable: true,
  //     //   filter: false,
  //     // },
  //     carboHydrates: {
  //       title: 'Glucides',
  //       editable: true,
  //       filter: false,

  //     },
  //     cg: {
  //       title: 'CG',
  //       editable: false,
  //       filter: false,
  //     },
  //     proteins: {
  //       title: 'Proteines',
  //       editable: false,
  //       filter: false,
  //     },
  //     lipids: {
  //       title: 'Lipides',
  //       editable: false,
  //       filter: false,
  //     },
  //     comment: {
  //       title: 'Commentaires',
  //       editable: true,
  //       editor: {
  //         type: 'textarea',
  //       },
  //       width: '30%',
  //       filter: false,
  //     },


  //   },
  // };

  source: LocalDataSource;

  settings: any;

  constructor(public foodsService: FoodsService) {
  }

  ngOnInit() {
    this.foodsService.getAllFoods()
      .subscribe((foods) => {
        this.source = new LocalDataSource(this.formaterSource(foods));
      });
      console.log('ngoninit:' + this.foodsService.name);
      this.settings = {

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
          mode: 'inline',
          editButtonContent: '<span class="glyphicon glyphicon-pencil"></span>'
        },

     setPaging: true,

      pager: {
        display: true,
      },
      columns: {
        // id: {
        //   title: 'Identifiant',
        //   editable: false,
        //   sort: true,
        //   filter: true,
        //    notShownField: true,
        // },
        name: {
          title: 'Aliment',
          editable: true,
          sort: true,
          width: '30%',
          filter: true,
          editor: {
            type: 'textarea',
          },
        },

      categorie: {
        title: 'Catégorie',
        width: '10%',
        editor: {
          type: 'list',
          config: {
              selectText: 'Select...',
              // list: this.foodsService.name,
              list:  [{title: 'Tomate', value: '1'}, {title: 'Poire et Pomme', value: '2'}]
          },
      },
         filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            // list:  this.foodsService.name,
            list:  [{title: 'Lion King', value: '1'}, {title: 'The Matrix', value: '2'}]
        }
      },
    },
        glycIndex: {
          title: 'IG (pour 100gr)   ',
          editable: true,
          filter: false,
          width: '7%',
        },
        energie: {
          title: 'Energie',
          editable: true,
          filter: false,
          width: '7%',
        },
        // portion: {
        //   title: 'Portion (en gr)',
        //   editable: true,
        //   filter: false,
        // },
        carboHydrates: {
          title: 'Glucides',
          editable: true,
          filter: false,
          width: '7%',

        },
        // cg: {
        //   title: 'CG',
        //   editable: false,
        //   filter: false,
        // },
        proteins: {
          title: 'Proteines',
          editable: false,
          filter: false,
          width: '7%',
        },
        lipids: {
          title: 'Lipides',
          editable: false,
          filter: false,
          width: '7%',
        },
        comment: {
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
  }

  // Permet de formater la donnée source utilisé comme propriété de ng2-smart-table
  formaterSource(f: Foods[]): ListFoods[] {
    console.log(' methode formaterSource');
     const listFoods: ListFoods[] = [];

    let i: number;
    for (i = 0; i < f.length; i++) {
      let cat: string;
      if ((f[i]['foodsGroup'] !== null)
        && (f[i]['foodsGroup'] !== undefined)) {
        cat = f[i]['foodsGroup']['name'];
        // this.foodsGroups.push(f[i]['foodsGroup']);
        this.foodsGroups.push(cat);
        console.log('cat:' + cat);
      } else { cat = f[i]['name'];
      console.log('cat ELSE:' + cat); }

      listFoods.push(
        {
          id: f[i]['id'],
          name: f[i]['name'],
          categorie: cat,
          glycIndex: f[i]['glycIndex'],
          energy: f[i]['energy'],
          carboHydrates: f[i]['carboHydrates'],
          proteins: f[i]['proteins'],
          lipids: f[i]['lipids'],
          comment: f[i]['comment']
        });
    }
    return listFoods;
  }



  onDeleteConfirm(event) {
    console.log('Methode onDeleteConfirm');
    if (window.confirm('Are you sure you want to delete?')) {
      // event.confirm.resolve();
      event.confirm.resolve(event.newData);

      // creation requete DELETE pour le controller du backend - methode delete dans foods service
      console.log(event.data);
      this.foodsService.delete(event.data).subscribe ( (food: Foods) => {
        food = event.data;

      });
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    console.log('methode onSaveConfirm');

    if (window.confirm('Are you sure you want to save?')) {
      // event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);

// creation requete put pour le controller du backend
      console.log(event.newData);
      this.foodsService.update(event.newData).subscribe ( (food: Foods) => {
        event.newData = food;
      });

    } else {
      event.confirm.reject();
    }
    this.source.refresh();

  }

  onCreateConfirm(event) {
    console.log('OnCreateConfirm');

    if (window.confirm('Are you sure you want to create   ?')) {
      // event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);

      // creation requete post de creation pour le controller du backend
      console.log('methode onCreateConfirm:' + event.newData);
      this.foodsService.create(event.newData).subscribe ( (food: Foods) => {
        event.newData = food;
      });

    } else {
      event.confirm.reject();
    }
    this.source.refresh();
  }

  onEditConfirm(event) {
    console.log('onEditConfirm');
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

