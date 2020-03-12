import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { NoimagePipe } from '../../pipes/noimage.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
	artists: Array<any> = [];
  loading = false;

	constructor( private _spotifyService: SpotifyService ) { }

  	ngOnInit() {
  	}

  	search(termino){
      this.loading = true;
  		this._spotifyService.getArtists(termino)
  		.subscribe( data => {
  			this.artists = data;
        this.loading = false;
  		});
  	}
}
