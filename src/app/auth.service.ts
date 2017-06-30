import {Injectable} from '@angular/core';
import {CanActivate, Router } from '@angular/router';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService implements CanActivate {
    user: firebase.User  = null;
    constructor(
        private authFb: AngularFireAuth,
        private router: Router){
        
    }

    canActivate():boolean{
        console.log('can activate:', this.user);
        if( this.user === null){
            this.router.navigate(['/login']);
        }
        return this.user !== null;
    }

    loginWithEmailPassword( email:string, password:string):firebase.Promise<any>{
        return this.authFb.auth
                .signInWithEmailAndPassword(email, password )
                .then((user)=>{
                    console.log('User:', user);
                    this.user = user;
                    this.router.navigate(['/categories'])
                })
                .catch((error)=>{
                    console.log(error);
                    this.router.navigate(['/login']);
                })
    }
}