import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from './item';
import { DataService } from './data.service';


@Component({
	selector:'.mu-app',
	templateUrl:'./items.component.html',
	styleUrls:['./items.component.css']
})
export class ItemsComponent implements OnInit{
	items:Item[] = [];
	selectedItem:Item;

	constructor(
		private dataService:DataService,
		private route:ActivatedRoute,
		private location:Location){}

	showInfo(item:Item):void{
		this.selectedItem = item;
	}


    goBack():void{
    	this.location.back();
    }
	ngOnInit():void{
		
		this.route.params
				.forEach((param:Params)=>{
					this.dataService.getItems(param['cat'])
							.subscribe((items)=>{
								let keys = Object.keys(items);
								keys.forEach((key)=>{
									this.items.push( items[key]);
								});		
							});
				});
	}
}