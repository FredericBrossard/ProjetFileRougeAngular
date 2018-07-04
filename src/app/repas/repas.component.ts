import { Component, OnInit } from '@angular/core';
import { MenuService } from './../menu.service';

import { AutocompletionService} from './../autocompletion.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {StateGroup } from './../state_group';





@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css']
})
export class RepasComponent implements OnInit {

  typeMeal = [
    {value: 'petitdej-0', viewValue: 'Petit-Dejeuner'},
    {value: 'dej-1', viewValue: 'Dejeuner'},
    {value: 'diner-2', viewValue: 'Diner'}
  ];

  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });

 stateGroupOptions: Observable<StateGroup[]>;

  constructor(public menuService: MenuService, public autocompletionService: AutocompletionService, private fb: FormBuilder) { }



//  cloneRow() {
//     const row = document.getElementById('rowToClone'); // find row to copy
//     const table = document.getElementById('tableau'); // find table to append to
//     const clone = row.cloneNode(true); // copy children too
//     // clone.id = 'newID'; // change id or other attributes/contents
//     table.appendChild(clone); // add new row to end of table
//   }








  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterGroup(val))
      );

      this.row.push({
        id: '',
        name: '',
       age: ''
     });
}
// tslint:disable-next-line:member-ordering
public row: any = [{}];

// Add New Row
addRow() {
  this.row.push({});
}

 // constructor(private fb: FormBuilder) { }
 filterGroup(val: string): StateGroup[] {
  if (val) {
    return this.autocompletionService.stateGroups
      .map(group => ({ letter: group.letter, names: this._filter(group.names, val) }))
      .filter(group => group.names.length > 0);
  }

  return this.autocompletionService.stateGroups;
}

  private _filter(opt: string[], val: string) {
    const filterValue = val.toLowerCase();
    return opt.filter(item => item.toLowerCase().startsWith(filterValue));
  }
}




