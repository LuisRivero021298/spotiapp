import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
	@Input() items: Array<any>;

  	constructor( private _router: Router ) { }

  	ngOnInit() {

  	}

  	viewArtist(id: string) {
  		this._router.navigate(['/artist', id]);
  	}
}
