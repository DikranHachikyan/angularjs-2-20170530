import { Component, Input } from '@angular/core';
import { Item } from './item';

@Component({
	selector:'item-detail',
	templateUrl:'./item-detail.component.html',
	styles:[``]
})
export class ItemDetailComponent{
	@Input() item:Item;
	constructor(){}

}