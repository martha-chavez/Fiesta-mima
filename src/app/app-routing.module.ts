import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { from } from 'rxjs';
import {PrincipalComponent} from './componets/principal/principal.component';


const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'**', redirectTo:'', pathMatch:'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
