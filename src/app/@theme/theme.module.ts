import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import {
  NbActionsModule,
  NbButtonModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbThemeModule,
  NbUserModule,
} from '@nebular/theme';

import {
  HeaderComponent,
  SearchInputComponent,
  TinyMCEComponent
} from './components';
import {
  OneColumnLayoutComponent
} from './layouts';
import {
  CapitalizePipe,
  NumberWithCommasPipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
} from './pipes';
import { MATERIAL_DARK_THEME } from './styles/material/theme.material-dark';
import { MATERIAL_LIGHT_THEME } from './styles/material/theme.material-light';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { DARK_THEME } from './styles/theme.dark';
import { DEFAULT_THEME } from './styles/theme.default';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
];
const COMPONENTS = [
  HeaderComponent,
  SearchInputComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
];
const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

@NgModule({
  imports: [CommonModule, MatRippleModule, ...NB_MODULES],
  exports: [CommonModule, MatRippleModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME, MATERIAL_LIGHT_THEME, MATERIAL_DARK_THEME ],
        ).providers,
      ],
    };
  }
}
