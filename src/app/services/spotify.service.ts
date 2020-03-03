import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Servicio de spotify en ejecucion");
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQC0LTWiUk-6TnUVdRWcqWfxbrs38ZAB-GGVqY9OxIySTqn15IWrsukR7G5nyLyv8_lZUZc0iNSe_Pnwh9s'
  });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
        .pipe(map( canciones => {
        return canciones['albums'].items;
    } ));
  }

  getArtista( termino: string ) {

    return this.getQuery(`search?query=${ termino }&type=artist&offset=5&limit=15`)
    .pipe(map( busqueda => {
      return busqueda['artists'].items;
  } ));
  }

}


