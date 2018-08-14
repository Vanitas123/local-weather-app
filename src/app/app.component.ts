import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _title = 'Localcast Weather';
  public get title() {
    return this._title;
  }
  public set title(value) {
    this._title = value;
  }
}
