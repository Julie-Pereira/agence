import { Component, OnInit } from '@angular/core';
import { SalariesService} from '../../service/salaries.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  salarie;
  salarieId;
  
  constructor(private salariesService:SalariesService,route:ActivatedRoute,private router:Router) { 
        // utiliser le service qui permet d'avoir un utilisateur en fonction de l'id
        this.salariesService.getSalarie(this.salarieId).subscribe(salarie=>{
          this.salarie=salarie;
          console.log(this.salarie);
        });

  }

  ngOnInit() {
  }

}
