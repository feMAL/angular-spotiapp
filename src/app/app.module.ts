//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


//ROUTES
import { RUTAS } from './app.routes'

//COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';
import { CardsComponent } from './shared/cards/cards.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './shared/loading/loading.component';
import { UrlnonsafePipe } from './pipes/urlnonsafe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ArtistComponent,
    CardsComponent,
    NoimagePipe,
    LoadingComponent,
    UrlnonsafePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS,{useHash:true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
