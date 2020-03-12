import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {;
  	constructor( private _http:HttpClient ) {}

  	getQuery(query: string){
  		let url = `https://api.spotify.com/v1/${ query }`;
  		let token = 'BQDvDKp2sFscSn3Qf3wZ3X3INlyDXrZW0aMVKRzUfHfn82k83vnh_3T0YfakhPaQwrduhO0u4yQWgCxS6No';
  		let headers = new HttpHeaders({'Authorization' : `Bearer ${token}`});

  		return this._http.get(url, {headers});
  	}

  	getNewReleases() {
    	return  this.getQuery('browse/new-releases')
    			 	.pipe( map( (data: any) => data.albums.items ));
  	}

	getArtists(termino: string) {
  	return  this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
  				  .pipe(map((data:any) => data.artists.items ));
	}

   getArtist(id: string){
		return this.getQuery(`artists/${id}`);
	}
	
	getTopTracks(id: string){
		return 	this.getQuery(`artists/${id}/top-tracks?country=us`)
					.pipe(map((data:any) => data.tracks));
	}
}
