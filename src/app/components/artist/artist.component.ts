import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  topTracks: any[] = [];
  artista: any = {};
  loading: boolean;
  url: string;
  preview: boolean;

  constructor( private activatedRoute: ActivatedRoute, private spotify: SpotifyService ) {

    this.loading = true;
    this.activatedRoute.params.subscribe( (params: any) => {
    //console.log('parametros constr: ' + params [ 'id' ]);
    this.getArtista(params[ 'id' ]);
    this.getTopTracks(params[ 'id' ]);
    this.preview = false;

    });
  }

  ngOnInit() {
  }

  getArtista( id: string ) {

    this.spotify.getArtista( id ).subscribe( (artista: any) => {
      //console.log( 'artista: \n' + JSON.stringify(artista, null, 4) );
      //console.log(artista.external_urls.spotify);
      this.url = artista.external_urls.spotify;
      this.artista = artista;
      this.loading = false;
    });

  }

  getTopTracks( id: string ) {

    this.spotify.getTopTracks( id ).subscribe( (topTracks: any) => {
      //console.log( 'canciones: \n' + JSON.stringify(topTracks, null, 4) );
      console.log('preview: ' + topTracks.preview_url);
      //console.log( 'Lista de canciones: \n' + topTracks );
      this.topTracks = topTracks;

      if ( topTracks.preview_url === null ) {
        console.log('preview: ' + topTracks.preview_url);
        this.preview = false;
      }


    });



  }

}
