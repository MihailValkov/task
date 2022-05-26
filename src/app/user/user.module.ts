import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserListComponent, UserItemComponent, UserDetailComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
