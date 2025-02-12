import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
 IonMenuButton, IonMenuToggle, IonListHeader, IonButtons, IonFab, IonFabButton, IonFabList, IonProgressBar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-pagina-upgrades',
  templateUrl: './pagina-upgrades.page.html',
  styleUrls: ['./pagina-upgrades.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet, IonMenuButton, IonMenuToggle, IonListHeader, IonButtons, IonFab, IonFabButton, IonFabList, CommonModule, FormsModule, IonProgressBar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginaUpgradesPage implements OnInit {

  constructor(private http: HttpClient) { }

  public valueDinero: number = 0

  public usuarios = {
    user_id: "",
    username: "",
    dinero: 0,
    cantidad_clicks: 0,
    cantidad_generada: 0,
    upgrade1: 0,
    upgrade2: 0,
  }
  public user: any;

  ngOnInit() {
  }

  nivelCooldown(){
    if (this.user.upgrade1 == 1){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 0.20
    } else if (this.user.upgrade1 == 2){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 0.40
    } else if (this.user.upgrade1 == 3){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 0.60
    } else if (this.user.upgrade1 == 4){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 0.80
    } else if (this.user.upgrade1 == 5){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 1
    }
  }

  nivelDinero(){
    if (this.user.upgrade2 == 1){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 0.20
    } else if (this.user.upgrade2 == 2){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 0.40
    } else if (this.user.upgrade2 == 3){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 0.60
    } else if (this.user.upgrade2 == 4){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 0.80
    } else if (this.user.upgrade2 == 5){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 1
    }
  }

  nivelPasivo(){
    if (this.user.upgrade3 == 1){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 0.20
    } else if (this.user.upgrade3 == 2){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 0.40
    } else if (this.user.upgrade3 == 3){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 0.60
    } else if (this.user.upgrade3 == 4){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 0.80
    } else if (this.user.upgrade3 == 5){
      this.valueDinero = this.valueDinero + 0.2 // En total sería 1
    }
  }

  mejorarCooldown(){
    let upgrade1 = {
      upgrade1: this.usuarios.upgrade1,
      dinero: this.usuarios.dinero
    }

    if (this.usuarios.dinero >= 100)
      this.usuarios.dinero = this.usuarios.dinero - 100
      this.usuarios.upgrade1 + 1
      this.http.post(`http://localhost:3000/upgrade1/${this.user.email}`, upgrade1).subscribe((Response: any) => {
    });
  }

  mejorarDinero(){}

  Clicker(){

    this.router.navigate(['/pagina2'])
  };

}
