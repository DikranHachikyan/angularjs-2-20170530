import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { ItemsComponent } from './items.component';
import { AppLoginComponent } from './app-login.component';
import { AuthService } from './auth.service';

const routes:Routes = [
    { path:'categories', component: CategoriesComponent },
    { path:'category/:cat', component:ItemsComponent, canActivate:[AuthService] },
    { path: 'login', component: AppLoginComponent },
    { path:'', redirectTo:'/categories', pathMatch:'prefix'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}

