// modification d'un projet
import { Component, OnInit } from '@angular/core';
import { ProjetsService} from '../../service/projets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  projet;
  projetId;
  formUpdate={
      name:"",
      description:"",
      datedebut:"",
      datefin:"",
      client:"",
      salaries:"",
      montant:"",
      statut:""
    }

    constructor(private projetsService:ProjetsService,private route:ActivatedRoute) {
    this.route.params.subscribe((params) => {
        this.projetId=params['id'];
    })

    this.projetsService.getProjet(this.projetId).subscribe(projet=>{

        this.projet=projet;
        console.log(this.projet);

    });
}

ngOnInit() {}

updateProjet(id){
    this.projetsService
    .updatedProjet(this.formUpdate.name,this.formUpdate.description,this.formUpdate.datedebut,this.formUpdate.datefin,this.formUpdate.client,this.formUpdate.salaries,this.formUpdate.montant,this.formUpdate.statut,this.projetId)      
    }
}
