import { Component, Input } from '@angular/core';
import { Item } from './item';

@Component({
	selector:'item-detail',
	template:`<div *ngIf="item">
			  <p>Artist:{{item.artist}}</p>
			  <p>{{item.description}}</p>
			  <p>Price: {{item.price}}</p>
			  </div>`,
	styles:[``]
})
export class ItemDetailComponent{
	@Input() item:Item;
	constructor(){}

}