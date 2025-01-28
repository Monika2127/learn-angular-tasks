import { Component, computed, signal, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-data/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'ms-user-with-signal',
  standalone: true,
  imports: [],
  templateUrl: './user-with-signal.component.html',
  styleUrl: './user-with-signal.component.css'
})
export class UserWithSignalComponent {

  //  Using signals can update the value with set method.

  selectedUserSignal = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUserSignal().avatar)

  onSelectUser() {
    this.selectedUserSignal.set(DUMMY_USERS[randomIndex])
  }

  //  Using @Input() decorator for signals

  //  Explicitly set the type of avatar as string
  //  Parent component doesn't need to change anything.

  //  can't be changed as this is readonly, so can't use set method as above.

  avatar = input<string>();
  name = input.required<string>();

  imagePathInput = computed(() => 'assets/users/' + this.avatar())

}
