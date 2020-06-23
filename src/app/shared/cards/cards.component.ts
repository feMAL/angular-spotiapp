import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items:any[] = []

  constructor(private _router: Router) { }

  ngOnInit() {}

  showItem(item){
    let typeOfItem = item.type
    let idItem
    if(typeOfItem === 'artist'){
      idItem= item.id
    }else{  
      idItem= item.artists[0].id
    }
    if(idItem!=null){
      this._router.navigate(['/artist',idItem])
    }
  }




}
