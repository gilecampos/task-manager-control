import { Component } from '@angular/core';
import { ColumnComponent } from './column/column.component';

@Component({
  selector: 'app-board',
  imports: [ColumnComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

}
