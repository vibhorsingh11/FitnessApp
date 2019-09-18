import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(private router: Router, private afuth: AngularFireAuth) {}

    registerUser(authData: AuthData) {
        this.afuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
        .then(result => {
            console.log(result);
            this.authSuccessfully();
        })
        .catch(error => {
            console.log(error);
        });
    }

    login(authData: AuthData) {
        this.afuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
        .then(result => {
            console.log(result);
            this.authSuccessfully();
        })
        .catch(error => {
            console.log(error);
        });
        this.authSuccessfully();
    }

    logout() {
        this.afuth.auth.signOut();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
    }

    isAuth() {
        return this.authSuccessfully;
    }

    private authSuccessfully() {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}
