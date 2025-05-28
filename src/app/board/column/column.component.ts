import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  imports: [],
  styleUrl: './column.component.scss',
  template: `
    <div class="board__column"> 
      <h2 class="board__title">{{ title }}</h2>
      <hr/>
    </div>

  `,
})
export class ColumnComponent {
  @Input() title: string = '';
}
