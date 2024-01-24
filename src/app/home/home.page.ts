import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Declaramos las variables necesarias
  public titulo: string = "";
  public descripcion: string="";
  public url: string= "";
  
  constructor() {
    this.titulo = "Trivia";
    this.descripcion ="Imagen de Trivia";
    this.url = ("assets/icon/trivia.jpg");
  }

  //inicializamos el segmento con su valor inicial

  //Gestionamos el cambio de segmentos

}
