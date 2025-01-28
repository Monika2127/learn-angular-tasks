import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-data/dummy-users';
import { Users } from '../types/user.interface';

//  It will give the random index upto the DUMMY_USERS length
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'ms-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) users!: Users;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.users.avatar;
  }

  onSelectUser() {
    this.select.emit(this.users.id);
  }

}

/*
*
* NORMALLY for one user
* 
* usersData = DUMMY_USERS;
* selectedUser = DUMMY_USERS[randomIndex];

* onSelectUser() {
*   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
*   this.selectedUser = DUMMY_USERS[randomIndex];
* }
* 
* * * * * * * * * * * * * * * * *
* 
* Instead of @Output() decorator, can use output() from @angular/core
* 
* selectA = output<string>();
* 
* onSelectUser() {
*    this.selectA.emit(this.id);
* }
*/