import { Component} from '@angular/core';

@Component({
	selector:'.mu-app',
	templateUrl:'./app.component.html',
	styleUrls:['./app.component.css']
})
export class AppComponent{
	title:string ;

	constructor(){
		this.title = 'Music Catalog'; 
	}

}