import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [UserService],
})
export class UserModule {}
