import { Component, OnInit, Input } from '@angular/core';
import { ProjetsService} from '../../service/projets.service';


@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html', 
  styleUrls: ['./projets.component.css']
})

export class ProjetsComponent implements OnInit {

  projets;

  constructor(private projetsService:ProjetsService) {
  
    this.projetsService.getProjets().subscribe(projets=>{
      this.projets = projets;
        console.log(projets);
    })
  }
   
  ngOnInit() {}

  deleteProjet(id){
    this.projetsService
    .delete(id).subscribe(resp=>{
      console.log(resp);
    });
    // on recharge la page
    location.reload();
  }
}

//test 
@Component({
  selector: 'clients',
  template: '<h1>{{clients.name}}</h1>'
})
export class ClientComponent {

  @Input()
  client: any
}