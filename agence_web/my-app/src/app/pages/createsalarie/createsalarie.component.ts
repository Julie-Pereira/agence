import { Component, OnInit } from '@angular/core';
import { SalariesService} from '../../service/salaries.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createsalarie',
  templateUrl: './createsalarie.component.html',
  styleUrls: ['./createsalarie.component.css']
})

export class CreatesalarieComponent implements OnInit {

  formCreate={
    name:"",
    prenom : "",
    username:"",
    birthday:"",
    adress : {street:"",
    city:"",
    zipcode:""},
    tel:"",
    mail:"",
    poste:""
  }

  constructor(private salariesService:SalariesService,private route:Router)  { }
  
  ngOnInit() {}
  
  createSalarie(){
  // on consomme notre service qui a comme arguments les valuers du formulaire
  this.salariesService
  .createSalarie(this.formCreate.name,this.formCreate.prenom,this.formCreate.username,this.formCreate.birthday,this.formCreate.adress.street,this.formCreate.adress.city,this.formCreate.adress.zipcode,this.formCreate.tel,this.formCreate.mail,this.formCreate.poste,this.formCreate.poste)
  }
  
} 