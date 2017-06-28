import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Item} from './item';
import {Category} from './category';



@Injectable()
export class DataService {
	constructor( private http:Http){}

	getItems(cat:string):Observable<Item[]>{
		return this.http.get('https://music-shop-angular2.firebaseio.com/collections/'+cat+'.json')
						.map((response:Response)=>{
							return response.json();
						});
	}

	getCategories():Observable<Category[]>{
		return this.http.get('https://music-shop-angular2.firebaseio.com/categories.json')
						.map( (response:Response)=>{
							let res  = response.json();
							return response.json();
						});		
	}

}
