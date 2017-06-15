import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
//http://reactivex.io/
import 'rxjs/add/operator/toPromise';
import {Item} from './item';
import {Category} from './category';



@Injectable()
export class DataService {
	constructor( private http:Http){}

	getItems(cat:string):Promise<Item[]>{
		return this.http.get('/app/data/cd-db-angular.js')
						.toPromise()
						.then((response)=>{ 
							let items = response.json() as Item[];
							let elms:Item[] = items.filter((item)=>{
								return item.category === cat;
							});
							return Promise.resolve(elms);
						})
						.catch(this.handleError);
	}

	getCategories():Promise<Category[]>{
		return this.http.get('/app/data/cd-db-categories-angular.js')
						.toPromise()
						.then((response)=>response.json() as Category[])
						.catch(this.handleError);		
	}

	handleError(error:any):Promise<any>{
		console.log('Error:', error);
		return Promise.reject( error);
	}
}
