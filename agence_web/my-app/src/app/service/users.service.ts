import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

    apiUrl='http://localhost:3000/clients/'

    datatopost;

    httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })};
 
    constructor(private http:HttpClient,private router:Router) {}

    // suppression d'un client 
    delete(id){
        return this.http.delete(this.apiUrl+id);
    }

    // creation d'un client 
    createClient(name,secteur,street,city,zipcode,name2,prenom,phone,mail){
        const payload =
        {
            "name":name,
            "adress" : {
                "street":street,
                "city":city,
                "zipcode":zipcode},
            "contact": {
                "name2":name2,
                "prenom":prenom,
                "phone":phone,
                "mail":mail},
            "secteur":secteur,
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

    // Modification d'un client
    updatedClient(name,secteur,street,city,zipcode,name2,prenom,phone,mail,id){
        const payload =
        {
            "name":name,
            "adress" : {
                "street":street,
                "city":city,
                "zipcode":zipcode},
            "contact": {
                "name2":name2,
                "prenom":prenom,
                "phone":phone,
                "mail":mail},
            "secteur":secteur,
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

    // Retourne l'ensemble des clients
    getClients(){
        return this.http.get(this.apiUrl);
    } 
    
    // Retourne un client
    getClient(id){
        return this.http.get(this.apiUrl+id);
    }
}
