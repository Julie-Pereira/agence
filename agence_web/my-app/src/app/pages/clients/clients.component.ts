import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../service/users.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  clients;
  
  constructor(private usersService:UsersService) {
    
    this.usersService.getClients().subscribe(clients=>{
    this.clients = clients;
      console.log(clients);
    })
  }
   
  ngOnInit() {}
  
  deleteClient(id){
    this.usersService
      .delete(id).subscribe(resp=>{
        console.log(resp);
      });
    // on recharge la page
    location.reload();
  }
}
