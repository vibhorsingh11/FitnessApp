import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
MatSidenavModule, MatToolbarModule, MatListModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule,
      MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule, MatListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule, MatListModule],
})
export class MaterialModule {}
