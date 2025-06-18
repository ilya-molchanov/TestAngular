import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    //RouterOutlet,
    //NgbModule
    UserComponent,
    TasksComponent
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // constructor(private modalService: NgbModule) {
  // }
  users = DUMMY_USERS;
  // selectedUserId = 'u1';
  selectedUserId?: string; // = 'u1';
  title = 'test-project';

  get selectedUser(){
    // debugger;
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
    console.log('selected user is ' + id);
  }
}
