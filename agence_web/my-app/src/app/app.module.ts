//déclaration des modules, component et des services
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { UpdateComponent } from './pages/update/update.component';
import { CreateComponent } from './pages/create/create.component';
import { SalarieComponent } from './pages/salarie/salarie.component';
import { SalariesComponent } from './pages/salaries/salaries.component';
import { CreatesalarieComponent } from './pages/createsalarie/createsalarie.component';
import { UpdatesalarieComponent } from './pages/updatesalarie/updatesalarie.component';
import { ClientComponent } from './pages/client/client.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { UpdateclientComponent } from './pages/updateclient/updateclient.component';
import { CreateclientComponent } from './pages/createclient/createclient.component';

import { UsersService } from './service/users.service';
import { ProjetsService } from './service/projets.service';
import { SalariesService } from './service/salaries.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjetsComponent,
    ProjetComponent,
    SalarieComponent,
    ClientComponent,
    ClientsComponent,
    UpdateComponent,
    CreateComponent,
    UpdateclientComponent,
    CreateclientComponent,
    SalariesComponent,
    CreatesalarieComponent,
    UpdatesalarieComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    ProjetsService,
    SalariesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
