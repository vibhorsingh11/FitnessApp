import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule,
MatProgressSpinnerModule, MatDialogModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule,
      MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule,
      MatSelectModule, MatProgressSpinnerModule, MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule,
    MatSelectModule, MatProgressSpinnerModule, MatDialogModule],
})
export class MaterialModule {}
