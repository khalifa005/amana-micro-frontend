import { MaterialModule } from '@amana-micro-frontend/material';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule], // Added
  declarations: [LayoutComponent],
})
export class LayoutModule {}
