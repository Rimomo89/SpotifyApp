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

  getNewReleases() {

    const headers = new HttpHeaders ({
        'Authorization' : 'Bearer BQC3jsEsIow-PVCB37rkKcIsNVS0o-ovKMGyDHmyFbHEqHjS_ruUEmLwOlytumeAq8Tqkb1LnT-f-ZByriQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
        .pipe(map( canciones => {
        return canciones['albums'].items;
    } ));
  }

  getArtista( termino: string ) {

    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQC3jsEsIow-PVCB37rkKcIsNVS0o-ovKMGyDHmyFbHEqHjS_ruUEmLwOlytumeAq8Tqkb1LnT-f-ZByriQ'
  });

    // tslint:disable-next-line: max-line-length
    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=5&limit=15`, { headers })
    .pipe(map( busqueda => {
      return busqueda['artists'].items;
  } ));
  }

}


