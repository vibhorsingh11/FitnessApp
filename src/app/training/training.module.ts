import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { TrainingComponent } from '../training/training.component';
import { CurrentTrainingComponent } from '../training/current-training/current-training.component';
import { NewTrainingComponent } from '../training/new-training/new-training.component';
import { PastTrainingComponent } from '../training/past-training/past-training.component';
import { StopTrainingComponent } from './current-training/stop-training.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        TrainingComponent,
        CurrentTrainingComponent,
        NewTrainingComponent,
        PastTrainingComponent,
        StopTrainingComponent
    ],
    imports: [
        AngularFirestoreModule,
        SharedModule
    ],
    exports: [],
    entryComponents: [StopTrainingComponent]
})
export class TrainingModule {}
