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
      'Authorization' : 'Bearer BQDNxXW7I8JtWFG7vyxcNBqTQMRLosNjmHESNpwEMXTbtojMOVfDgZ0BkU-N979r7-dHcjRFz3aUDJXGlBA'
  });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
        .pipe(map( canciones => {
        return canciones['albums'].items;
    } ));
  }

  getArtistas( termino: string ) {

    return this.getQuery(`search?query=${ termino }&type=artist&offset=5&limit=15`)
    .pipe(map( busqueda => {
      return busqueda['artists'].items;
  } ));
  }

  getArtista( id: string ) {

    return this.getQuery(`artists/${ id }`);

  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=ES`)
    .pipe(map( topTracks => {
      return topTracks[ 'tracks' ];
  } ));

  }

}


