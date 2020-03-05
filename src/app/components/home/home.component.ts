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
  error: boolean;
  messageerror: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;
    this.messageerror = '';

    this.spotify.getNewReleases()
    .subscribe( (canciones: any) => {
      console.log(canciones);
      this.nuevasCanciones = canciones;
      this.loading = false;
    },(errorSuscribe: any) => {
      this.loading = false;
      this.error = true;
      console.log(errorSuscribe.error.error.message);
      this.messageerror = errorSuscribe.error.error.message;
    } );
  }

  ngOnInit() {
  }

}
