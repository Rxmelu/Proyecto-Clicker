import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
 IonMenuButton, IonMenuToggle, IonListHeader, IonButtons, IonProgressBar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { information, thumbsUpSharp } from 'ionicons/icons';

@Component({
  selector: 'app-pagina-upgrades',
  templateUrl: './pagina-upgrades.page.html',
  styleUrls: ['./pagina-upgrades.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet, IonMenuButton, IonMenuToggle, IonListHeader, IonButtons, CommonModule, FormsModule, IonProgressBar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginaUpgradesPage implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  public url: string = 'https://proyecto-clicker.onrender.com'
  // public url: string = 'https://localhost:3000/'

  public progresoCooldown: number = 0
  public progresoDinero: number = 0
  public progresoPasivo: number = 0

  public user: any;
  public user_info: any

  ngOnInit() {
    this.user_info = this.route.snapshot.params
    console.log(this.user_info)

    this.nivelCooldown();
    this.nivelDinero();
    this.nivelPasivo();
  }

  nivelCooldown(){
    if (this.user_info.upgrade1 == 1){
      this.progresoCooldown = this.progresoCooldown + 0.2 // En total sería 0.20
    } else if (this.user_info.upgrade1 == 2){
      this.progresoCooldown = this.progresoCooldown + 0.2 // En total sería 0.40
    } else if (this.user_info.upgrade1 == 3){
      this.progresoCooldown = this.progresoCooldown + 0.2 // En total sería 0.60
    } else if (this.user_info.upgrade1 == 4){
      this.progresoCooldown = this.progresoCooldown + 0.2 // En total sería 0.80
    } else if (this.user_info.upgrade1 == 5){
      this.progresoCooldown = this.progresoCooldown + 0.2 // En total sería 1
    }
  }

  nivelDinero(){
    if (this.user_info.upgrade2 == 1){
      this.progresoDinero = this.progresoDinero + 0.2 // En total sería 0.20
    } else if (this.user_info.upgrade2 == 2){
      this.progresoDinero = this.progresoDinero + 0.2 // En total sería 0.40
    } else if (this.user_info.upgrade2 == 3){
      this.progresoDinero = this.progresoDinero + 0.2 // En total sería 0.60
    } else if (this.user_info.upgrade2 == 4){
      this.progresoDinero = this.progresoDinero + 0.2 // En total sería 0.80
    } else if (this.user_info.upgrade2 == 5){
      this.progresoDinero = this.progresoDinero + 0.2 // En total sería 1
    }
  }

  nivelPasivo(){
    if (this.user_info.upgrade3 == 1){
      this.progresoPasivo = this.progresoPasivo + 0.2 // En total sería 0.20
    } else if (this.user_info.upgrade3 == 2){
      this.progresoPasivo = this.progresoPasivo + 0.2 // En total sería 0.40
    } else if (this.user_info.upgrade3 == 3){
      this.progresoPasivo = this.progresoPasivo + 0.2 // En total sería 0.60
    } else if (this.user_info.upgrade3 == 4){
      this.progresoPasivo = this.progresoPasivo + 0.2 // En total sería 0.80
    } else if (this.user_info.upgrade3 == 5){
      this.progresoPasivo = this.progresoPasivo + 0.2 // En total sería 1
    }
  }

  mejorarDinero(){
      if (this.user_info.upgrade1 == 0) {
      this.user_info.dinero = this.user_info.dinero - 100
      this.user_info.upgrade1 = this.user_info.upgrade1 + 1
      this.http.post(`${this.url}/upgrade1/${this.user_info.id}`, this.user_info.upgrade1).subscribe((Response: any) => {
      });
      console.log("Upgrade1 subido a nivel 1") 

    } /*else if (this.user_info.upgrade1 == 1) {
      this.user_info.dinero = this.user_info.dinero - 200
      this.user_info.dinero = this.user_info.upgrade1 + 1
      this.http.post(`${this.url}/upgrade1/${this.user_info.id}`, this.user_info.upgrade1).subscribe((Response: any) => {
      });
      console.log("Upgrade1 subido a nivel 2")
    }*/
  }

  mejorarCooldown(){
    if (this.user_info.upgrade2 == 0){

    }
  }

  Clicker(){

    this.router.navigate(['/pagina2'])
  };

}
