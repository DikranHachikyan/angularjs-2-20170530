import {Injectable} from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

import {Item} from './item';
import {Category} from './category';

@Injectable()
export class FirebaseDataService{

	constructor(private db:AngularFireDatabase){}

	getItems(cat:string):Observable<Item[]>{
		return this.db.list('/collections/' + cat);
	}

	getCategories():Observable<Category[]>{
		return this.db.list('/categories/');
	}
}