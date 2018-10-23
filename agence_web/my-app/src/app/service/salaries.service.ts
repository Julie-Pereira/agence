import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

@Injectable({
  providedIn: 'root'
})
export class SalariesService {

    apiUrl='http://localhost:3000/salaries/'

    datatopost;

    httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })};
 
    constructor(private http:HttpClient,private router:Router) {}

    // suppression d'un salarié
    delete(id){
    return this.http.delete(this.apiUrl+id);
    }


    // creation d'un salarie
    createSalarie(name,prenom,username,birthday,street,city,zipcode,tel,mail,statut,poste){
    const payload =
        {
            "name":name,
            "prenom" : prenom,
            "username":username,
            "birthday": birthday,
            "adress" : {
                "street":street,
                "city":city,
                "zipcode":zipcode},
            "tel":tel,
            "mail":mail,
            "statut":statut,
            "poste":poste
        }

        // conversion en jSON
        this.datatopost=JSON.stringify(payload);

        // requête http en post qui renvoie resp ou err
        return this.http.post(this.apiUrl,this.datatopost,this.httpOptions).subscribe(
        res =>{
            console.log(res);
        },
        err => {
            console.log(err.message);
        }
    );
    }

    // modification d'un salarie
    updatedSalarie(name,prenom,username,birthday,street,city,zipcode,tel,mail,poste,id){
    const payload =
        {
          "name":name,
          "prenom" :prenom,
          "username":username,
          "birthday": birthday,
          "adress" : {
                "street":street,
                "city":city,
                "zipcode":zipcode},
          "tel":tel,
          "mail":mail,
          "poste":poste
        }

        // conversion en JSON
        this.datatopost=JSON.stringify(payload);

        // requête http en post qui renvoie resp ou err
        return this.http.put(this.apiUrl+id,this.datatopost,this.httpOptions).subscribe(
            res =>{
                console.log(res);
            },
            err => {
                console.log(err.message);
            }
        );

    }

    // récupérer plusieurs salariés
    getSalaries(){
        return this.http.get(this.apiUrl);
    }  

    // récupérer un salarié
    getSalarie(id){
        return this.http.get(this.apiUrl+id);
    }
}
