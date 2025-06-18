import { Component, Input, Output, EventEmitter, input, output, signal, computed } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [CardComponent]
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  // {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/'+ this.avatar() ); // this.selectedUser().avatar
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];

  }
}
