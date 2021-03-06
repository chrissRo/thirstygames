/*
* The idea of creating a new Angular module (@NgModule) is to centralize what you will import from Angular Material in a single file.
* So, before adding Angular Material components in this file, you will need to import and configure it in your main module.
* */

import {NgModule} from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatTableModule,
  MatCheckboxModule,
  MatTabsModule,
  MatSelectModule,
  MatGridListModule,
  MatChipsModule,

} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,

  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,

  ]
})
export class MaterialModule {}
