import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { NoimagePipe } from '../../pipes/noimage.pipe';
import { Alert } from '../shared/alert/alert.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
	newSongs: Array<any>;
	loading: boolean;
	error: boolean;
	alertErr: Alert;  

  	constructor( private _spotifyService: SpotifyService ) {
		this.newSongs = [];
		this.loading = false;
		this.error = false;
		this.alertErr = {
			title: 'Error',
			message: '',
			classes: ['alert', 'alert-danger']
		}
		this.getNewReleases();
  	}

  	ngOnInit() {

	}
	  
	getNewReleases(){
		this.loading = true;
		this._spotifyService.getNewReleases()
  		.subscribe( (data: any) => {
	  		this.newSongs = data;
        	this.loading = false;
		},
		err => {
			console.log(err);
			let messageError = err.error.error.message;
			this.alertErr.message =  messageError;
			this.loading = false;
			this.error = true;
		});
	}

}
