import {Injectable} from '@angular/core';

import {Item} from './item';
import {ITEMS} from './mock-items';

@Injectable()
export class ItemsService {
	getItems():Promise<Item[]>{
		return new Promise<Item[]>((resolve,reject)=>{
					setTimeout(()=>{
						console.log('get items');
						if( ITEMS.length > 0){
							resolve(ITEMS);		
						}
						else{
							reject('Connection error');
						}
						
					},2000);  
                });
	}
}
