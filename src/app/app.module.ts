// Parte 1 - importar os @angular PRIMEIRO
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Para usar campo INPUT no html---FormsModule
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// Parte 2 - importar os componentes 
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
