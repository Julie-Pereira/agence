import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../service/users.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  client;
  clientId;
  
  constructor(private usersService:UsersService,route:ActivatedRoute,private router:Router) {
    route.params.subscribe((params)=>{
      this.clientId=params['id'];
      console.log(params['id']);
    })

    // utiliser le service qui permet d'avoir un utilisateur en fonction de l'id
    this.usersService.getClient(this.clientId).subscribe(client=>{
      this.client=client;
      console.log(this.client);
    });
}

ngOnInit() {}
  
// fonction de suppression qui est utilisé au click 
  deleteClient(){
    this.usersService.delete(this.clientId).subscribe(client=>{
      console.log(this.client);
    // on retourne sur la page clients
    this.router.navigate['clients'];
    });
  
  }
}