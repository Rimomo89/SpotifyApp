import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  topTracks: any = {};
  artista: any = {};
  loading: boolean;

  constructor( private activatedRoute: ActivatedRoute, private spotify: SpotifyService ) {

    this.loading = true;
    this.activatedRoute.params.subscribe( params => {
    this.getArtista(params[ 'id' ]);
    this.getTopTracks(params[ 'id' ]);

    });
  }

  ngOnInit() {
  }

  getArtista( id: string ) {

    this.spotify.getArtista( id ).subscribe( artista => {
      console.log( artista );
      this.artista = artista;
      this.loading = false;
    });

  }

  getTopTracks( id: string ) {

    this.spotify.getTopTracks( id ).subscribe( topTracks => {
      console.log( topTracks );
      this.topTracks = topTracks;
    });

  }

}
