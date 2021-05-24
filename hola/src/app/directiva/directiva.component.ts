import { Component, OnInit } from '@angular/core';

interface Producto {
  nombre: string;
  stock: number;
  fabricante: string;
  FechaVence: Date;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss'],
})
export class DirectivaComponent implements OnInit {
  pestana: string = '';
  cargando: boolean = true;
  nombres: Array<string> = ['maria', 'juan', 'cesar', 'ramón'];
  productos: Array<Producto> = [
    {
      nombre: 'Frijol',
      stock: 15,
      fabricante: 'distribuidor Industrial',
      FechaVence: new Date('04/22/2021'),
    },
    {
      nombre: 'Maíz',
      stock: 24,
      fabricante: 'distribuidor Industrial',
      FechaVence: new Date('05/22/2021'),
    },
    {
      nombre: 'Refresco',
      stock: 30,
      fabricante: 'distribuidor Coca-Cola',
      FechaVence: new Date('06/22/2021'),
    },
  ];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 5000);
  }

  alternando() {
    this.cargando = !this.cargando;
  }
  //mostrarCargando() {
  // this.cargando = true;
  //}

  cambiarPestana(pestana: string) {
    this.pestana = pestana;
  }
}
