import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() optionsClicked = new EventEmitter<string>();

  onClickOption(option: string) {
    this.optionsClicked.emit(option);
  }

}
