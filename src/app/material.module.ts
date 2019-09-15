import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule,
      MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule,
      MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule,
    MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule],
})
export class MaterialModule {}
