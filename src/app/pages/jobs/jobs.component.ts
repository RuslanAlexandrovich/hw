import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent {
  isCollapsed: boolean = true;

  isCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
