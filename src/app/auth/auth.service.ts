import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthData } from './auth-data.model';
import { TrainingService } from '../training/training.service';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(private router: Router, private afuth: AngularFireAuth, private trainingService: TrainingService) {}

    initAuthListener() {
        this.afuth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/training']);
            } else {
                this.trainingService.cancelSubscriptions();
                this.authChange.next(false);
                this.router.navigate(['/login']);
                this.isAuthenticated = false;
            }
        });
    }

    registerUser(authData: AuthData) {
        this.afuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
    }

    login(authData: AuthData) {
        this.afuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
    }

    logout() {
        this.afuth.auth.signOut();
    }

    isAuth() {
        return this.isAuthenticated;
    }
}
