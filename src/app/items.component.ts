import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { DataService } from './data.service';


@Component({
	selector:'.mu-app',
	templateUrl:'./items.component.html',
	styleUrls:['./items.component.css']
})
export class ItemsComponent implements OnInit{
	title:string ;
	items:Item[];
	selectedItem:Item;

	constructor(private dataService:DataService){
		this.title = 'Music Catalog'; 
	}

	showInfo(item:Item):void{
		this.selectedItem = item;
	}

	getItems():void {
		console.log('before get items');
		this.dataService.getItems()
				.then( (items)=> this.items = items)
				.catch((error)=>console.log(error));
		console.log('after get items');
	}

	ngOnInit():void{
		this.getItems();
	}
}