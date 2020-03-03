import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artistas: any [] = [];

  constructor(private spotify: SpotifyService) {}

  ngOnInit() {
  }

  buscarArtista( termino: string ) {

    console.log(termino);
    this.spotify.getArtista (termino)
    .subscribe( (resultado: any) =>{
      console.log(resultado);
      this.artistas = resultado;
    });

  }

}
