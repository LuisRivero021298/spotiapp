import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  public artist: any;
  public loadingArtist:boolean;
  public topTracks: Array<any>;
  public srcPrev: string;

  constructor( 
    private _route: ActivatedRoute,
    private _spotifyService: SpotifyService,
    private _location: Location
  ) { 
    this.artist = {};
    this.loadingArtist = false;
    this.topTracks = [];
    this.srcPrev = 'https://open.spotify.com/embed/track/';
  }

  ngOnInit() {
    this._route.params.subscribe( params => {
      let id = params['id'];
      this.loadingArtist = true;
      this.getArtist(id);
    })
  }

  getArtist(id: string){
    this._spotifyService.getArtist(id)
        .subscribe( (artist: any) => {
          this.artist =  artist;
          this.getTopTracks(id);
        });
  }

  comeBack(){
    this._location.back();
  }

  getTopTracks(id: string){
    this._spotifyService.getTopTracks(id)
        .subscribe( (topTracks: any) => {
          console.log(topTracks);
          this.topTracks = topTracks;
          this.loadingArtist = false;
        })
  }
}
