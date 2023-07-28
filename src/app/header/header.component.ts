import { Component, EventEmitter, Output } from '@angular/core';
import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataBaseService: DatabaseService) {}

  onSaveData() {
    this.dataBaseService.saveData();
  }

  onFetchData() {
    this.dataBaseService.fetchData();
  }

}
