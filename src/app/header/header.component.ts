import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatabaseService } from '../shared/database.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataBaseService: DatabaseService, private authService: AuthService) {}

  isAuth = false;

  onSaveData() {
    this.dataBaseService.saveData();
  }

  onFetchData() {
    this.dataBaseService.fetchData();
  }

  ngOnInit() {
    this.authService.user.subscribe(auth => {
      this.isAuth = !auth ? false : true;
    });
  }

}
