import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampoMinatoComponent } from './components/campo-minato/campo-minato.component';

const routes: Routes = [
  {path:'', component: CampoMinatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
