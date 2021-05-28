import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: EjemploComponent,
  },
  {
    path: 'ejemplo',
    component: EjemploComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'directiva',
    component: DirectivaComponent,
  },
  {
    path: 'titulos',
    component: TitulosComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    children: [
      {
        path: 'agregarUsuarios',
        component: AgregarUsuariosComponent,
      },
      {
        path: 'editarUsuario',
        component: EditarUsuariosComponent,
      },
    ],
  },
  {
    path: 'articulo',
    component: ArticuloComponent,
  },
  {
    path: '**',
    component: Pagina404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
