import { Component, OnInit } from '@angular/core';
import { ProjetsService} from '../../service/projets.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  formCreate={
    name:"",
    description:"",
    datedebut:"",
    datefin:"",
    client:"",
    salaries:"",
    montant:"",
    statut:""

  }

  constructor(private projetsService:ProjetsService,private route:Router)  { }

  ngOnInit() {}

  // fonction appelée au clique du bouton ajouter - voir html fonction (click)
  createProjet(){
  // on consomme notre service qui a comme arguments les valuers du formulaire
  this.projetsService
  .createProjet(this.formCreate.name,this.formCreate.description,this.formCreate.datedebut,this.formCreate.datefin,this.formCreate.client,this.formCreate.salaries,this.formCreate.montant,this.formCreate.statut);
  }

}
