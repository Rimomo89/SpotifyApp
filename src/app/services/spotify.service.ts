import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Servicio de spotify en ejecucion");
  }

  getNewReleases() {

    const headers = new HttpHeaders ({
        'Authorization' : 'Bearer BQBfOaeqL2jwcXaHQaTYlauB42VMvoUK47wLWNkgNo8OZFHo56NeqMdfVVFD-zxKHlKroc0l8JDfsYwfzOw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtista( termino: string ) {

    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQBfOaeqL2jwcXaHQaTYlauB42VMvoUK47wLWNkgNo8OZFHo56NeqMdfVVFD-zxKHlKroc0l8JDfsYwfzOw'
  });

    // tslint:disable-next-line: max-line-length
    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=5&limit=15`, { headers });
  }

}


