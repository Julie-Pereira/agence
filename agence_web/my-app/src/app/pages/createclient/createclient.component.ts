import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../service/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css']
})
export class CreateclientComponent implements OnInit {

  formCreate={
      name:"",
      adress : 
        {street:"",
        zipcode:"",
        city:""},
      contact: {
        name2:"",
        prenom:"",
        phone:"",
        mail:""},
      secteur:"",
  }

  constructor(private usersService:UsersService,private route:Router)  { }
  
  ngOnInit() {}
  
  // fonction appelée au clique du bouton ajouter - voir html fonction (click)
  createClient(){
  // on consomme notre service qui a comme arguments les valuers du formulaire
  this.usersService
  .createClient(this.formCreate.name,this.formCreate.secteur,this.formCreate.adress.street,this.formCreate.adress.city,this.formCreate.adress.zipcode,this.formCreate.contact.name2,this.formCreate.contact.prenom,this.formCreate.contact.phone,this.formCreate.contact.mail)
  }
  
}