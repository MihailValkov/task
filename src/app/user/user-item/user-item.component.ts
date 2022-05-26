import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input() user!: IUser;
  constructor() {}

  ngOnInit(): void {}
}
