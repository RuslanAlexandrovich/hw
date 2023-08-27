import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  message: string = '';
  currentDate: Date = new Date();

  ngOnInit() {
    setInterval(() => {
      this.message = new Date().toLocaleTimeString();
    }, 1000);
  }
}
