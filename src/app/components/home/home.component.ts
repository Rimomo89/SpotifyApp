import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor(private soptify: SpotifyService) {


    this.soptify.getNewReleases()
    .subscribe( (canciones: any) => {
      console.log(canciones.albums.items);
      this.nuevasCanciones = canciones.albums.items;
    });

  }

  ngOnInit() {
  }

}
