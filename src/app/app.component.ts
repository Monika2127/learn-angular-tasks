import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-data/dummy-users';
import { Users } from './types/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  usersData: Users[] = DUMMY_USERS;

  selectedUser?: Users;

  onSelectUser(id: string) {
    console.log("id", id)

    this.selectedUser = this.usersData.find(user => user.id === id)
  }
}
