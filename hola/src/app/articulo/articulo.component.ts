import { Component, OnInit } from '@angular/core';

interface Articulo {
  nombre: string;
  descripcion: string;
  precio: number;
}
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss'],
})
export class ArticuloComponent implements OnInit {
  articulos: Array<Articulo> = new Array<Articulo>();

  constructor() {}

  ngOnInit(): void {
    this.articulos.push(
      {
        nombre: 'Camisa Manga Larga',
        descripcion: 'Es una camisa de manga larga',
        precio: 350,
      },
      {
        nombre: 'Pantalla 50 Pulgadas',
        descripcion: 'Es una pantalla de 50 pulgadas',
        precio: 10000,
      },
      {
        nombre: 'Pantalla 42 Pulgadas',
        descripcion: 'Es una pantalla de 42 pulgadas',
        precio: 8000,
      },
      {
        nombre: 'Pantalla 60 Pulgadas',
        descripcion: 'Es una pantalla de 60 pulgadas',
        precio: 14000,
      }
    );
  }
}
