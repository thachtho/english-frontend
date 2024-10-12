import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  imports: [
    AdminRoutingModule,
    NbMenuModule,
    ThemeModule
  ],
  declarations: [
    AdminComponent
  ],
})
export class AdminModule {}
