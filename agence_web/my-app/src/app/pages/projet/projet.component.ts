import { Component, OnInit } from '@angular/core';
import { ProjetsService} from '../../service/projets.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})

export class ProjetComponent implements OnInit {
  projet;
  projetId;
  
  constructor(private projetsService:ProjetsService,route:ActivatedRoute,private router:Router) {
    route.params.subscribe((params)=>{
      this.projetId=params['id'];
        console.log(params['id']);
     })

    // utiliser le service qui permet d'avoir un utilisateur en fonction de l'id
    this.projetsService.getProjet(this.projetId).subscribe(projet=>{
      this.projet=projet;
      console.log(this.projet);
    });

  }

  ngOnInit() {}

  // fonction de suppression qui est utilisé au click 
  deleteProjet(){
    this.projetsService.delete(this.projetId).subscribe(projet=>{
    console.log(this.projet);
    // on retourne sur la page projets
    this.router.navigate['projets'];
    });

  }
}