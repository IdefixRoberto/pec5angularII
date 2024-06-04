import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showHeading = true;

  onActivate() {
    this.showHeading = true;
  }

  onDeactivate() {
    this.showHeading = false;
  }
}
