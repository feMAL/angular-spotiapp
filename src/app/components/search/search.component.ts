import { Component, OnInit } from '@angular/core';
import { SpotiappService } from 'src/app/services/spotiapp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public values:any[]=[]
  public search:boolean
  public loading:boolean

  constructor( private _spotiService:SpotiappService ) { }

  ngOnInit() {
    
  }

  searchArtist(evento){
    let search = evento
    this.loading = true
    this._spotiService
      .getSearchArtists(search)
      .subscribe((data:any)=>{
        this.values = data
        this.loading= false
      })
  }

}
