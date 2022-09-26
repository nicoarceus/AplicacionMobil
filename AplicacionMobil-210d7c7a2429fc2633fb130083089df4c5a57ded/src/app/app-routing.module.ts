import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },
<<<<<<< HEAD:src/app/app-routing.module.ts
  {
    path:'',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path:'',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path:'',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path:'',
=======
 
  {
    path:'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path:'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path:'configuracion',
>>>>>>> 750bf43afcc645f239412006287ffe62f04702bc:AplicacionMobil-210d7c7a2429fc2633fb130083089df4c5a57ded/src/app/app-routing.module.ts
    loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'nuevoypopular',
    loadChildren: () => import('./nuevoypopular/nuevoypopular.module').then( m => m.NuevoypopularPageModule)
  },

<<<<<<< HEAD:src/app/app-routing.module.ts

=======
>>>>>>> 750bf43afcc645f239412006287ffe62f04702bc:AplicacionMobil-210d7c7a2429fc2633fb130083089df4c5a57ded/src/app/app-routing.module.ts
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
