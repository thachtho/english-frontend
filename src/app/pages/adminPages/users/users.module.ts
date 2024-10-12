import { NgModule } from '@angular/core';
import {
  NbCardModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../../@theme/theme.module';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    NbCardModule,
    Ng2SmartTableModule,
    ThemeModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
  ],
})
export class UsersModule { }
