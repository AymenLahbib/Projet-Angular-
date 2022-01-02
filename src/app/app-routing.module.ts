import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementsComponent } from './departements/departements.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { UpdateDepartementComponent } from './services/update-departement/update-departement.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { DepartementGuard } from './departement.guard';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';

const routes: Routes = [
  {path: "departements", component : DepartementsComponent},
  {path: "add-departement", component : AddDepartementComponent,canActivate:[DepartementGuard]},
  {path: "updateDepartement/:id", component: UpdateDepartementComponent},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: "", redirectTo: "departements", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
