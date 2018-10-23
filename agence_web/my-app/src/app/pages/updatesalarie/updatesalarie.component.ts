import { Component, OnInit } from '@angular/core';
import { SalariesService} from '../../service/salaries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatesalarie',
  templateUrl: './updatesalarie.component.html',
  styleUrls: ['./updatesalarie.component.css']
})

export class UpdatesalarieComponent implements OnInit {

  salarie;
  salarieId;

    formUpdate={
        name:"",
        prenom : "",
        username:"",
        birthday:"",
        adress: {
            street:"",
            city:"",
            zipcode:""},
        tel:"",
        mail:"",
        poste:""
    }


    constructor(private salariesService:SalariesService,private route:ActivatedRoute) {
        this.route.params.subscribe((params) => {
            this.salarieId=params['id'];
        })

        this.salariesService.getSalarie(this.salarieId).subscribe(salarie=>{

            this.salarie=salarie;
            console.log(this.salarie);
        });
    }

    ngOnInit() {}

    updatesalarieSalarie(id){
    this.salariesService
    .updatedSalarie(this.formUpdate.name,this.formUpdate.prenom,this.formUpdate.username,this.formUpdate.birthday,this.formUpdate.adress.street,this.formUpdate.adress.city,this.formUpdate.adress.zipcode,this.formUpdate.tel,this.formUpdate.mail,this.formUpdate.poste,this.salarieId)      
    }
}
