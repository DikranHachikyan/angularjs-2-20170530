import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Item } from './item';
import { DataService } from './data.service';


@Component({
	selector:'.mu-app',
	templateUrl:'./items.component.html',
	styleUrls:['./items.component.css']
})
export class ItemsComponent implements OnInit{
	items:Item[];
	selectedItem:Item;

	constructor(
		private dataService:DataService,
		private route:ActivatedRoute,
		private location:Location){}

	showInfo(item:Item):void{
		this.selectedItem = item;
	}

	/*getItems():void {
		console.log('before get items');
		this.dataService.getItems()
				.then( (items)=> this.items = items)
				.catch((error)=>console.log(error));
		console.log('after get items');
	}
    */
    goBack():void{
    	this.location.back();
    }
	ngOnInit():void{
		//this.getItems();
		this.route.params
				  .switchMap( (params:Params) => this.dataService.getItems(params['cat']))
				  .subscribe((items:Item[])=>this.items = items);
	}
}