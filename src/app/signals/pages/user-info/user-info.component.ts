import { Component, inject, OnInit, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../types/user-request';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  userId = signal(1);
  currentUser = signal<User | undefined>(undefined);
  userWasFound = signal(false);
  #usersService = inject(UsersService);

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id < 1) return;

    this.userId.set(id);
    this.currentUser.set(undefined);

    this.#usersService.getUserById(id).subscribe(user => {
      this.currentUser.set(user);
      this.userWasFound.set(true);
    });
  }
}
