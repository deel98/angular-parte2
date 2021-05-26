import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  titulo: string = 'soy una variable';
  dinero: number = 2400;
  ganancia: number = 0.54;

  fechaNacimiento: Date = new Date('26-05-2021');

  textoLargo: string =
    'Las mujeres, vestidas y adornadas con asdasdasdasda lo que da de sí el contrabando, lucían pendientes de ostentosa filigrana, patenas fastuosas, pañuelos de seda de colorines; en las casas no faltaba ron jamaiqueño ni queso de Flandes, y los hombres poseían armas inglesas, bolsas de piel y tabaco Virginia y Macuba. Al través de Portugal, Inglaterra enviaba sus productos, y de España pasaban otros, cruzando el caudaloso río.';
  constructor() {}

  ngOnInit(): void {}
}
