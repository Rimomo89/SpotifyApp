import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artistas: any [] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = false;
  }

  ngOnInit() {
  }

  buscarArtista( termino: string ) {


    //console.log(termino);
    this.loading = true;
    this.spotify.getArtistas (termino)
    .subscribe( (resultado: any) => {
      console.log(resultado);
      this.artistas = resultado;
      this.loading = false;
    });

    if( termino === "") {
      this.loading = false;
    }

  }


}
