import { Component, OnInit } from '@angular/core';
import {Departement} from "../model/departement.model";
import { ActivatedRoute,Router } from '@angular/router';
import { DepartementService } from '../services/departement.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  newDepartement = new Departement();

  message :String ;
  categories : Categorie[];
newIdCat : number;
newCategorie : Categorie;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private departementServices : DepartementService) { }

  ngOnInit(): void {
    this.categories = this.departementServices.listeCategories();
  }

  addDepartement(){
    this.newCategorie = this.departementServices.consulterCategorie(this.newIdCat);
    this.newDepartement.categorie = this.newCategorie;
    this.departementServices.ajouterDepartement(this.newDepartement);
    this.message = "Produit "+ this.newDepartement.nomDepartement+" ajouté avec succès"
    this.router.navigate(['departements']);
    }


}
