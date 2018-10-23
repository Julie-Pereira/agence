import { Component, OnInit } from '@angular/core';
import { SalariesService} from '../../service/salaries.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})

export class SalariesComponent implements OnInit {

  salaries;

  constructor(private salariesService:SalariesService) {
  
    this.salariesService.getSalaries().subscribe(salaries=>{
    this.salaries = salaries;
          console.log(salaries);
    }) 
  }

  ngOnInit() {}

  deleteSalarie(id){
    this.salariesService
    .delete(id).subscribe(resp=>{
        console.log(resp);
    });
    // on recharge la page
    location.reload();
  }
}
