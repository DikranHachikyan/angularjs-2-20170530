import {Component,OnInit} from '@angular/core';

import {Category} from './category';
import {DataService} from './data.service';


@Component({
	selector:'list-categories',
	template:`<ul>
				<li *ngFor="let cat of categories">
					<a routerLink="/category/{{cat.id}}">
					  <h3>{{cat.title}}</h3>
					  <img [src]="cat.thumbnail" alt="{{cat.title}}" />
					</a>
				</li>
			  </ul>
			  <p>Description</p>`
})
export class CategoriesComponent implements OnInit{
	categories:Category[]=[];

	constructor( private dataService:DataService){}
	

	getCategories():void {
		this.dataService.getCategories()
						.subscribe((categories)=>{
							let keys = Object.keys(categories);

							keys.forEach((key)=>{
								this.categories.push(categories[key]);
							})
							console.log('categories:', categories);
						});
	}

	ngOnInit():void{
		this.getCategories();
	}

}