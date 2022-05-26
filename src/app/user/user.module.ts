import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './+store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [UserService],
})
export class UserModule {}
