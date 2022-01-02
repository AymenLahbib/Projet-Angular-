import { Component, OnInit } from '@angular/core';
import {Departement} from "../model/departement.model";
import { AuthService } from '../services/auth.service';
import { DepartementService } from '../services/departement.service';
@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {

  departements : Departement[];

  constructor(private departementServices : DepartementService,
               public authService: AuthService) {

    this.departements= departementServices.listeDepartements();
    
   }

  ngOnInit(): void {
  }

  supprimerDepartement(d: Departement)
{
//console.log(d);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.departementServices.supprimerDepartement(d);
}

}
