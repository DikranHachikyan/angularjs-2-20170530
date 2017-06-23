import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {Observable} from 'rxjs/Observable';

import { Item } from './item';
import { FirebaseDataService } from './firebase-data.service';


@Component({
	selector:'.mu-app',
	templateUrl:'./items.component.html',
	styleUrls:['./items.component.css']
})
export class ItemsComponent implements OnInit{
	items:Observable<Item[]>;
	selectedItem:Item;

	constructor(
		private dataService:FirebaseDataService,
		private route:ActivatedRoute,
		private location:Location){}

	showInfo(item:Item):void{
		this.selectedItem = item;
	}

	
    goBack():void{
    	this.location.back();
    }
	ngOnInit():void{
		this.route.params.forEach((params)=>{
			this.items = this.dataService.getItems(params['cat']);
		});
	}
}