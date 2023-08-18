import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { RouterModule } from '@angular/router';   // Added
import { HeaderComponent } from './layout/header.component';
import { MenuItemComponent } from './layout/menu-item/menu-item.component';
import { MaterialModule } from '@amana-micro-frontend/material';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, BrowserAnimationsModule, BrowserModule], // Added
  declarations: [LayoutComponent,
    HeaderComponent,
    MenuItemComponent,
  ],
  exports: [LayoutComponent,
    HeaderComponent,
    MenuItemComponent,
    ]
})
export class LayoutModule {}
