import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemDetailComponent} from './item-detail.component';
import {ItemsService} from './items.service';

@NgModule({
	imports:[BrowserModule],
	declarations:[AppComponent, ItemDetailComponent],
	providers:[ItemsService],
	bootstrap:[AppComponent]
})
export class AppModule {
	//
}
