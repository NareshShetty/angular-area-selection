import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  test1: string;
  test2: string;
  test3: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test1: 'dd', test2:'sg', test3: 'sgsh'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test1: 'dd', test2:'sg', test3: 'sgsh'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test1: 'dd', test2:'sg', test3: 'sgsh'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test1: 'dd', test2:'sg', test3: 'sgsh'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test1: 'dd', test2:'sg', test3: 'sgsh'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test1: 'dd', test2:'sg', test3: 'sgsh'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test1: 'dd', test2:'sg', test3: 'sgsh'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test1: 'dd', test2:'sg', test3: 'sgsh'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test1: 'dd', test2:'sg', test3: 'sgsh'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test1: 'dd', test2:'sg', test3: 'sgsh'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test1: 'dd', test2:'sg', test3: 'sgsh'},
  
];

/**
 * @title Table with selection
 */
@Component({
  selector: 'table-selection-example',
  styleUrls: ['table-selection-example.css'],
  templateUrl: 'table-selection-example.html',
})
export class TableSelectionExample {
  displayedColumns: string[] = [ 'position', 'name', 'weight', 'symbol', 'test1', 'test2', 'test3'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  isAllSelected() {
    console.log(this.selection);
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
     console.log(this.selection);
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
