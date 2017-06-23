import {Component,OnInit} from '@angular/core';

import {Category} from './category';
import {FirebaseDataService} from './firebase-data.service';
import {Observable} from 'rxjs/Observable';


@Component({
	selector:'list-categories',
	template:`<ul>
				<li *ngFor="let cat of categories|async">
					<a routerLink="/category/{{cat.id}}">
					  <h3>{{cat.title}}</h3>
					  <img [src]="cat.thumbnail" alt="{{cat.title}}" />
					</a>
				</li>
			  </ul>
			  <p>Description</p>`
})
export class CategoriesComponent implements OnInit{
	categories:Observable<Category[]>;

	constructor( private dataService:FirebaseDataService){}
	

	getCategories():void {
		this.categories = this.dataService.getCategories();
				
	}

	ngOnInit():void{
		this.getCategories();
	}

}