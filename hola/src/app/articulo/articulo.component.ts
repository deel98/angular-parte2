import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss'],
})
export class ArticuloComponent implements OnInit {
  articulos: Array<Articulo> = new Array<Articulo>();

  constructor(private ruta: Router) {}

  ngOnInit(): void {
    this.articulos.push(
      {
        nombre: 'Camisa Manga Larga',
        descripcion: 'Es una camisa de manga larga',
        precio: 350,
        stock: 19,
        precioMayorista: 250,
      },
      {
        nombre: 'Pantalla 50 Pulgadas',
        descripcion: 'Es una pantalla de 50 pulgadas',
        precio: 10000,
        stock: 13,
        precioMayorista: 9000,
      },
      {
        nombre: 'Pantalla 42 Pulgadas',
        descripcion: 'Es una pantalla de 42 pulgadas',
        precio: 8000,
        stock: 42,
        precioMayorista: 6000,
      },
      {
        nombre: 'Pantalla 60 Pulgadas',
        descripcion: 'Es una pantalla de 60 pulgadas',
        precio: 14000,
        stock: 4,
        precioMayorista: 12000,
      }
    );
  }

  pasarParametro(articuloRecibido: Articulo) {
    this.ruta.navigate([
      'articuloDetalle',
      { articulo: JSON.stringify(articuloRecibido) },
    ]);
  }
}
