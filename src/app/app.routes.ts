import {Routes} from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component'
import { ArtistComponent } from './components/artist/artist.component'

export const RUTAS : Routes = [
    { path: '', component:HomeComponent},
    { path: 'home', component:HomeComponent},
    { path: 'artist/:id', component:ArtistComponent},
    { path: 'search', component:SearchComponent},
    { path: "**", redirectTo:'/'}
]