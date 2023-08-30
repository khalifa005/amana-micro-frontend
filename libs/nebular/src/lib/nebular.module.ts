import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbLayoutDirection,
  DEFAULT_MEDIA_BREAKPOINTS,
  NbPopoverModule,
  NbProgressBarModule,
  NbInputModule,
  NbDatepickerModule,
} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NbHeaderComponent } from './NbHeader/nb-header.component';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbPopoverModule,
  NbProgressBarModule,
  NbInputModule,
  NbDatepickerModule,
  ReactiveFormsModule,
  FormsModule,
  TranslateModule,
];

// const COMPONENTS = [
//   HeaderComponent,
//   // FooterComponent,
// ];

@NgModule({
  imports: [
    CommonModule,
    ...NB_MODULES,
    // NbThemeModule.forRoot()
  ],
  exports: [
    CommonModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
    NbPopoverModule,
    NbProgressBarModule,
    NbInputModule,
    NbDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    // ...NB_MODULES
    NbHeaderComponent,
  ],
  declarations: [NbHeaderComponent],
})
export class NebularModule {}
