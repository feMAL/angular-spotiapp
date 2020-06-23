import { Component, OnInit } from '@angular/core';
import { SpotiappService } from 'src/app/services/spotiapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public arrayCards:any[]=[]
  public errorMessage:string
  public title:string
  public loading:boolean

  constructor( private _spotiService:SpotiappService ) {}

  ngOnInit() {
    this.loading = true
    this.loadCards()
  }
  
  loadCards(){
    this.title = 'New Albums'
    this._spotiService
      .getNewReleases()
      .subscribe(
        (data:any)=>{
          this.arrayCards = data
          console.log(this.arrayCards)
          this.loading = false
        },err=>{
          this.errorMessage = err.message
        }
      )

  }

}
