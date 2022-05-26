import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent,
  },
  {
    path: 'detail:/userId',
    component: UserDetailComponent,
  },
];

export const UserRoutingModule = RouterModule.forChild(routes);
