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
      'Authorization' : 'Bearer BQA-AigA486swz6z4F23XOUkcYddPlwAX4CqDw5hgdMpCXfaqjZfbBqnrJxRUQd0EfJBSym6Gh540DCw5EU'
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
    //.pipe(map( busqueda => {
      //return busqueda['artists'].items;
  //} ));
  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`);

  }

}


