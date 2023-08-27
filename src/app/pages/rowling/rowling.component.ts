import { Component } from '@angular/core';

@Component({
  selector: 'app-rowling',
  templateUrl: './rowling.component.html',
  styleUrls: ['./rowling.component.css'],
})
export class RowlingComponent {
  isCollapsed: boolean = true;

  isCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
