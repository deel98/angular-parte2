import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss'],
})
export class TitulosComponent implements OnInit {
  nombre: string = 'david';
  apellido: string = 'cantú';

  alumno: any = {
    nombre: 'Juan',
    apellido: 'Carvajal',
    edad: 22,
  };

  img: string =
    'data:image/png;base64,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';

  inputnuevo: string = 'el valor solo procedera usando property binding[]';

  correo: string = 'david@gmail.com';
  password: string = '1234';
  constructor() {}

  ngOnInit(): void {}
  //con ng model podemos tanto dar datos a una variable como tambien mostrarlo.

  ingresar() {
    // console.log(evento);
    console.log(this.nombre);
    console.log(this.password);
  }

  llamaralerta() {
    alert('Ha presionado doble click');
  }

  escribirmodelo() {
    console.log(this.password);
  }

  escribircorreo() {
    this.correo = this.password;
    console.log(this.correo);
    console.log(this.password);
  }

  escribir(evento: any) {
    console.log(evento.target.value);
  }

  colorearfondo(evento: any) {
    evento.srcElement.style.background = 'blue';
    evento.srcElement.style.width = '300px';
  }

  cambiartamano(evento: any) {
    evento.srcElement.style.width = '600px';
    evento.srcElement.style.heigth = '800px';
    evento.srcElement.style.border = '1px solid blue';
  }

  minimizartamano(evento: any) {
    evento.srcElement.style.width = '300px';
    evento.srcElement.style.heigth = '300px';
    evento.srcElement.style.border = '1px solid red';
  }
}
