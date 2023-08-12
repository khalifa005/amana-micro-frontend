import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { Route, RouterModule } from '@angular/router';

export const authRoutes: Route[] = [
  { path: 'login', component: BannerComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BannerComponent],
  exports: [BannerComponent],
})
export class CommonUiModule {}
