import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.loadUsers().subscribe((users) => (this.users = users));
  }
}
