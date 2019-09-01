import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule],
})
export class MaterialModule {}
