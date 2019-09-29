import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Store } from '@ngrx/store';

import { Exercise } from './exercise.model';
import { UIService } from '../shared/ui.service';
import * as UI from '../shared/ui.actions';
import * as Training from './training.actions';
import * as fromTraining from './training.reducer';

@Injectable()
export class TrainingService {
    private availableExercises: Exercise[] = [];

    exerciseChanged = new Subject<Exercise>();
    exercisesChanged = new Subject<Exercise[]>();
    finishedExercisesChanged = new Subject<Exercise[]>();
    private runningExercise: Exercise;
    private fbSubs: Subscription[] = [];

    constructor(private db: AngularFirestore, private uiService: UIService, private store: Store<fromTraining.State>) {}

    fetchAvailableExercises() {
        this.store.dispatch(new UI.StartLoading());
        this.fbSubs.push(this.db.collection('availableExercises').snapshotChanges().pipe(map(docArray => {
            return docArray.map(doc => {
              return {
                id: doc.payload.doc.id,
                // name: doc.payload.doc.data().name,
                // duration: doc.payload.doc.data().duration,
                // calories: doc.payload.doc.data().calories,
                ...doc.payload.doc.data()
              }as Exercise;
            });
          })).subscribe((exercises: Exercise[]) => {
            this.store.dispatch(new UI.StopLoading());
            this.store.dispatch(new Training.SetAvailableExercises(exercises));
          }, error => {
            this.store.dispatch(new UI.StopLoading());
            this.uiService.snowSnackbar('Fetching Exercises failes, please try again later', null, 3000);
            this.exercisesChanged.next(null);
          }));
    }

    startExercise(selectedId: string) {
        this.store.dispatch(new Training.StartTraining(selectedId));
    }

    completeExercise() {
        this.addDataToDatabase({ ...this.runningExercise, date: new Date(), state: 'completed'});
        this.store.dispatch(new Training.StopTraining());
    }

    cancelExercise(progress: number) {
        this.addDataToDatabase({ ...this.runningExercise,
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.calories * (progress / 100),
            date: new Date(), state: 'cancelled'});
        this.store.dispatch(new Training.StopTraining());
    }

    getRunningExercise() {
        return {...this.runningExercise};
    }

    fetchCompletedOrCancelledExercises() {
        this.fbSubs.push(this.db.collection('finishedExercises').valueChanges().subscribe((exercises: Exercise[]) => {
            this.store.dispatch(new Training.SetFinishedExercises(exercises));
        }));
    }

    cancelSubscriptions() {
        this.fbSubs.forEach(sub => sub.unsubscribe);
    }

    private addDataToDatabase(exercise: Exercise) {
        this.db.collection('finishedExercises').add(exercise);
    }
}
