//déclaration des routes pour chaque page
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientComponent } from './pages/client/client.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { SalarieComponent } from './pages/salarie/salarie.component';
import { SalariesComponent } from './pages/salaries/salaries.component';
import { UpdateComponent } from './pages/update/update.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateclientComponent } from './pages/updateclient/updateclient.component';
import { CreateclientComponent } from './pages/createclient/createclient.component';
import { UpdatesalarieComponent } from './pages/updatesalarie/updatesalarie.component';
import { CreatesalarieComponent } from './pages/createsalarie/createsalarie.component';

const routes: Routes = [

    // route pour les projets
  {
    path : '',
    component: HomeComponent,
  },
  {
    path : 'projets',
    component: ProjetsComponent,
  },
  {
    path : 'projet/:id',
    component: ProjetComponent,
  },
  {
    path:'update/:id',
    component:UpdateComponent,
  },
  {
    path:'create',
    component:CreateComponent,
  },

  // route pour les clients
  {
    path:'clients',
    component:ClientsComponent,
  },
  {
    path: 'client/:id',
   component:ClientComponent,
  },
  {
    path: 'updateclient/:id',
   component:UpdateclientComponent,
  },
  {
    path: 'createclient',
   component:CreateclientComponent,
  },

  // route pour les salariés 
  {
    path:'salaries',
    component:SalariesComponent,
  },
  {
    path:'salarie/:id',
    component:SalarieComponent,
  },
  {
    path: 'updatesalarie/:id',
   component:UpdatesalarieComponent,
  },
  {
    path: 'createsalarie',
   component:CreatesalarieComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })

export class AppRoutingModule { }
