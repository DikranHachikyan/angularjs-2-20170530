import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import {ItemsService} from './items.service';


@Component({
	selector:'.mu-app',
	templateUrl:'./app.component.html',
	styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit{
	title:string ;
	items:Item[];
	selectedItem:Item;

	constructor(private itemsService:ItemsService){
		this.title = 'Music Catalog'; 
	}

	showInfo(item:Item):void{
		this.selectedItem = item;
	}

	getItems():void {
		console.log('before get items');
		this.itemsService.getItems()
				.then( (items)=> this.items = items)
				.catch((error)=>console.log(error));
		console.log('after get items');
	}

	ngOnInit():void{
		this.getItems();
	}
}