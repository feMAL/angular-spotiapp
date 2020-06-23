import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotiappService } from 'src/app/services/spotiapp.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public artist:{}
  public loading=true

  constructor(private _rutaActiva:ActivatedRoute, private _spotiService:SpotiappService ) { }
  
  ngOnInit() {
    this._rutaActiva.params.subscribe( params => {
      this._spotiService.getArtist(params.id)
        .subscribe(artist => {
          this.loading = false
          this.artist = artist
          console.log(artist)
        })
    })
  }

}
