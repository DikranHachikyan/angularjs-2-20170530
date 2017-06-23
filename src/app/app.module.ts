import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { CategoriesComponent} from './categories.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemsComponent } from './items.component';
import { FirebaseDataService } from './firebase-data.service';

const config = {
    apiKey: "AIzaSyBnRjBEBvxO2IiamgczmoyUN087l_RUt8w",
    authDomain: "music-shop-angular2.firebaseapp.com",
    databaseURL: "https://music-shop-angular2.firebaseio.com",
    projectId: "music-shop-angular2",
    storageBucket: "music-shop-angular2.appspot.com",
    messagingSenderId: "316160229526"
  };

@NgModule({
	imports:[BrowserModule, 
	         HttpModule,
	         RouterModule.forRoot([{
	         	path:'categories',
	         	component: CategoriesComponent
	         },
	         {
	         	path:'category/:cat',
	         	component:ItemsComponent
	         },
	         {
	         	path:'',
	         	redirectTo:'/categories',
	         	pathMatch:'prefix'
	         }]),
	         AngularFireModule.initializeApp(config),
	         AngularFireDatabaseModule
	        ],
	declarations:[AppComponent, 
	              ItemDetailComponent,
	              ItemsComponent, 
	              CategoriesComponent
	          ],
	providers:[FirebaseDataService],
	bootstrap:[AppComponent]
})
export class AppModule {
	//
}
