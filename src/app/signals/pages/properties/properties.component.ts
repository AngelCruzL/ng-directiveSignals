import { Component, computed, signal } from '@angular/core';
import { User } from '../../types/user-request';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent {
  user = signal<User>({
    id: 1,
    email: 'me@angelcruzl.dev',
    first_name: 'Angel',
    last_name: 'Cruz',
    avatar: 'https://i.pravatar.cc/300',
  });

  userFullName = computed<string>(
    () => `${this.user().first_name} ${this.user().last_name}`,
  );

  onFieldUpdated(field: keyof User, value: string) {
    this.user.mutate(current => {
      switch (field) {
        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;

        case 'email':
          current.email = value;
          break;

        case 'id':
          current.id = +value;
          break;
      }
    });
  }
}
