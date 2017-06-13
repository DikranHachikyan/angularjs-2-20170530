import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';
import { CategoriesComponent} from './categories.component';
import { ItemDetailComponent } from './item-detail.component';
import { DataService } from './data.service';

@NgModule({
	imports:[BrowserModule, HttpModule],
	declarations:[AppComponent, ItemDetailComponent, CategoriesComponent],
	providers:[DataService],
	bootstrap:[AppComponent]
})
export class AppModule {
	//
}
