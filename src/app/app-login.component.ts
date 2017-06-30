import {Component } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
    selector:'user-login',
    template:`
    <button (click)="login()">Login</button>
    <button (click)="logout()">Logout</button>
  `
})
export class AppLoginComponent{

    constructor( private auth:AuthService){}

    login(){
        this.auth.loginWithEmailPassword('dhachikian@expert-bg.org','123456')
    }
    logout(){
        
    }
}