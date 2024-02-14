import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersFacade } from '@users/users/data-access';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'users-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.scss'],
})
export class UsersFilterComponent {
  nameFilter = new FormControl('');
  private usersFacade = inject(UsersFacade);

  applyFilter() {
    const name = this.nameFilter.value;
    if (name !== null) {
      this.usersFacade.filterUsers(name);
    }
  }
}
