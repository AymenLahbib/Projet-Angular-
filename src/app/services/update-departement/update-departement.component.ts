import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DepartementService } from '../departement.service';
import { Departement } from 'src/app/model/departement.model';
import { Categorie } from 'src/app/model/categorie.model';



@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styles: []
})
export class UpdateDepartementComponent implements OnInit {

  currentDepartement = new Departement();
  categories : Categorie[];
updatedCategorie : Categorie;

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private departementService: DepartementService) { }
    
              ngOnInit() {
                this.categories = this.departementService.listeCategories();
                this.currentDepartement =
                this.departementService.consulterDepartement(this.activatedRoute.snapshot.params.id);
                }
    updateDepartement()
    {
      this.updatedCategorie =
      this.departementService.consulterCategorie(this.currentDepartement.categorie.idCat);
      this.currentDepartement.categorie = this.updatedCategorie;
      this.departementService.updateDepartement(this.currentDepartement);
      this.router.navigate(['departements']);
      }
  
  }
