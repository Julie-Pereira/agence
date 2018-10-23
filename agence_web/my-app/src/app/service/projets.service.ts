import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ProjetsService {

    apiUrl='http://localhost:3000/projets/'

    datatopost;

    httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })};
 
    constructor(private http:HttpClient,private router:Router) {}

    //suppression d'un projet
    delete(id){
        return this.http.delete(this.apiUrl+id);
    }

    // creation d'un projet
    createProjet(name,description,datedebut,datefin,client,salaries,montant,statut){
        const payload =
        {
            "name":name,
            "description":description,
            "datedebut":datedebut,
            "datefin":datefin,
            "client":client,
            "salaries":salaries,
            "montant":montant,
            "statut":statut
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

    // Modifier un projet
    updatedProjet(name,description,datedebut,datefin,client,salaries,montant,statut,id){
        const payload =
        {
            "name":name,
            "description":description,
            "datedebut":datedebut,
            "datefin":datefin,
            "client":client,
            "salaries":salaries,
            "montant":montant,
            "statut":statut
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

    // Récupérer l'ensemble des projets
    getProjets(){
        return this.http.get(this.apiUrl);
    }  

    // Récupérer un projet
    getProjet(id){
        return this.http.get(this.apiUrl+id);
    }
}