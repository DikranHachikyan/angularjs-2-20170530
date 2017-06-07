import { Component } from '@angular/core';
import { Item } from './item';

@Component({
	selector:'.mu-app',
	template:`<h1>{{title}}</h1>
			  <h2>{{item.title}}</h2>
			  <img [src]="item.artwork" alt="{{item.title}}" (click)="showInfo(item)" />
			  <item-detail [item]="selectedItem" ></item-detail>`,
	styles:[`img:hover{ cursor:pointer}`]
})
export class AppComponent{
	title:string = 'Music Catalog';
	item:Item;
	selectedItem:Item;
	constructor(){
		this.item = {"id": "MU224","title": "Below the Salt","artist": "Steeleye Span","price": 3.49,"artwork": "./images/below_salt.jpg","description": "Maddy Prior leads on this carefully chosen selection of traditional folk songs."};
	}

	showInfo(item:Item):void{
		this.selectedItem = item;
	}

}