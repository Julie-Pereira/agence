import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../service/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})

//component pour modifier un client
export class UpdateclientComponent implements OnInit {

  client;
  clientId;

    formUpdate={
        name:"",
        adress: {
            street:"",
            city:"",
            zipcode:""},
        contact: {
            name2:"",
            prenom:"",
            phone:"",
            mail:""},
        secteur:"",
    }


    constructor(private usersService:UsersService,private route:ActivatedRoute) {
        this.route.params.subscribe((params) => {
        this.clientId=params['id'];
        })

        this.usersService.getClient(this.clientId).subscribe(client=>{

        this.client=client;
        console.log(this.client);
        });
    }

    ngOnInit() {}

    updateclientClient(id){
    this.usersService
    .updatedClient(this.formUpdate.name,this.formUpdate.secteur,this.formUpdate.adress.street,this.formUpdate.adress.city,this.formUpdate.adress.zipcode,this.formUpdate.contact.name2,this.formUpdate.contact.prenom,this.formUpdate.contact.phone,this.formUpdate.contact.mail,this.clientId)      
    }
}
