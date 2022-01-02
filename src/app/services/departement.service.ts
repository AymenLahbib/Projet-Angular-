
import { Injectable } from '@angular/core';
import {Departement} from "../model/departement.model";
import { Categorie } from '../model/categorie.model';
@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  categories : Categorie[];
  departements : Departement[];
  departementsRecherche : Departement[];
  departement= new Departement();
  
  
  categorie = new Categorie();
  constructor() {
    this.categories = [ {idCat : 1, nomCat : "Informatique"},

                        {idCat : 2, nomCat : "Genie Civil "},
                        {idCat : 3, nomCat : "Genie Electrique"},
                        {idCat : 4, nomCat : "Genie Mecanique "},
                        {idCat : 5, nomCat : " SEG "}];
    this.departements = [
      {idDepartement : 1, nomDepartement : "Technologie de l informatique ", nombreEtudiants : 500, dateCreation : new Date("01/14/2011"), categorie: {idCat : 1, nomCat : "Informatique"}  },
      {idDepartement : 2, nomDepartement : "Genie mecanique", nombreEtudiants : 450, dateCreation : new Date("12/17/2010"), categorie: {idCat : 4, nomCat : "Genie Mecanique "} },
      {idDepartement : 3, nomDepartement :"Genie Civil", nombreEtudiants : 200, dateCreation : new Date("02/20/2013"), categorie: {idCat : 2, nomCat : "Genie Civil "}},
      {idDepartement : 4, nomDepartement : " SEG  ", nombreEtudiants : 120, dateCreation : new Date("04/20/2015"), categorie: {idCat : 5, nomCat : " SEG "} },
      {idDepartement : 5, nomDepartement : " Genie Electrique  ", nombreEtudiants : 300, dateCreation : new Date("07/30/2018"), categorie: {idCat : 3, nomCat : "Genie Electrique"} }

      ];
   }

   listeDepartements():Departement[] {
    return this.departements;
  }
  ajouterDepartement( prod: Departement){
  this.departements.push(prod);
  }

  supprimerDepartement( dep: Departement){
    //supprimer le departement dep du tableau departements
    const index = this.departements.indexOf(dep, 0);
    if (index > -1) {
    this.departements.splice(index, 1);
    }
    //ou Bien
    /* this.departements.forEach((cur, index) => {
    if(dep.idDepartement === cur.idDepartement) {
    this.departements.splice(index, 1);
    }
    }); */
    }

    consulterDepartement(id:number): Departement{
      this.departement = this.departements.find(p => p.idDepartement == id);
      return this.departement;
      }

      updateDepartement(dep:Departement)
{
// console.log(p);
this.supprimerDepartement(dep);
this.ajouterDepartement(dep);
this.trierDepartements();
}

trierDepartements(){
  this.departements = this.departements.sort((n1,n2) => {
  if (n1.idDepartement > n2.idDepartement) {
  return 1;
  }
  if (n1.idDepartement < n2.idDepartement) {
  return -1;
  }
  return 0;
  });
  }

  listeCategories():Categorie[] {
    return this.categories;
    }
    
    consulterCategorie(id:number): Categorie{
    this.categorie = this.categories.find(cat => cat.idCat == id);
    return this.categorie;
    }
    
    rechercherParCategorie(idCat: number): Departement[]{
      this.departementsRecherche = [];
      this.departements.forEach((cur, index) => {
      if(idCat == cur.categorie.idCat) {
      console.log("cur "+cur);
      this.departementsRecherche.push(cur);
      }
    });
    return this.departementsRecherche; }
}
