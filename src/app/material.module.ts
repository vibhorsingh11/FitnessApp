import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
MatSidenavModule, MatToolbarModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule,
      MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule],
})
export class MaterialModule {}
