import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../../material/src/lib/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
    ],
  declarations: [BannerComponent],
  exports: [BannerComponent],
})
export class CommonUiModule {}
