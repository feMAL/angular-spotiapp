import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { config } from './conf/service'
import { map }  from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotiappService {

  private token  : string = '';

  constructor(private _http:HttpClient) { }

  getArtist(artist){
    let url = config.url + `artists/${artist}`

    let headers = new HttpHeaders({
      'Authorization': config.access_token
    })

    return this._http.get(url,{headers})
  }

  getSearchArtists(artist:string){
    let url = config.url + config.uri.albumsByArtist
    let params = new HttpParams().set('q',artist).set('type','artist')
    let header = new HttpHeaders({
      'Authorization': config.access_token
    })
    
    return this._http.get(url,{headers:header,params:params})
      .pipe( map( data => data['artists'].items ) )
  }

  getNewReleases = () =>{
    let url = config.url + config.uri.newReleases /*config.session.url + config.session.uri*/
    let header = new HttpHeaders({
      'Authorization': config.access_token
    })

    return this._http.get(url,{headers:header})
      .pipe( map( data => data['albums'].items ) )
  }

  getTopTracks(artist:string){
    let url = config.url + `artists/${artist}/top-tracks?country=us`

    let header = new HttpHeaders({
      'Authorization': config.access_token
    })
    
    return this._http.get(url,{headers:header})
      .pipe( map( data => data['tracks']  ) )
  }

}
