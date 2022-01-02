import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Departement } from '../model/departement.model';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
departements : Departement[];
categories : Categorie[];
IdCategorie : number ;
  constructor(private departementServices : DepartementService) {
    
   }

  ngOnInit(): void {
this.categories = this.departementServices.listeCategories();
    this.departements = this.departementServices.listeDepartements();
  }

  onChange(){
    console.log(this.IdCategorie);
    this.departements = this.departementServices.rechercherParCategorie(this.IdCategorie);
  }

  
}
