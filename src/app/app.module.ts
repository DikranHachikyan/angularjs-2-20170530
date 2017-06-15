import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriesComponent} from './categories.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemsComponent } from './items.component';
import { DataService } from './data.service';

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
	         }])
	        ],
	declarations:[AppComponent, 
	              ItemDetailComponent,
	              ItemsComponent, 
	              CategoriesComponent
	          ],
	providers:[DataService],
	bootstrap:[AppComponent]
})
export class AppModule {
	//
}
