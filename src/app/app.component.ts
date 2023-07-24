import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes';
  optionSelected = 'recipes'; 

  onOptionSelected(option: string) {
    this.optionSelected = option;
  }
}
