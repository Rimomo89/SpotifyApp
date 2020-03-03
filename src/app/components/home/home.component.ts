import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {

    this.loading = true;

    this.spotify.getNewReleases()
    .subscribe( (canciones: any) => {
      console.log(canciones);
      this.nuevasCanciones = canciones;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
