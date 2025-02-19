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

  public CosteDinero: any = 100
  public CosteCooldown: any = 100
  public progresoCooldown: number = 0
  public progresoDinero: number = 0
  public user_info: any
  public informacion: any
  

  ngOnInit() {
    this.user_info = this.route.snapshot.params

    this.getInformacion();

    console.log(this.user_info)
  }

  nivelDinero(){
    if (this.informacion.upgrade1 == 1){
      this.progresoDinero = this.progresoDinero + 0.2 // En total sería 0.20
      this.CosteDinero = 200
    } else if (this.informacion.upgrade1 == 2){
      this.progresoDinero = this.progresoDinero + 0.2 // En total sería 0.40
      this.CosteDinero = 350
    } else if (this.informacion.upgrade1 == 3){
      this.progresoDinero = this.progresoDinero + 0.2 // En total sería 0.60
      this.CosteDinero = 500
    } else if (this.informacion.upgrade1 == 4){
      this.progresoDinero = this.progresoDinero + 0.2 // En total sería 0.80
      this.CosteDinero = 1000
    } else if (this.informacion.upgrade1 == 5){
      this.progresoDinero = this.progresoDinero + 0.2 // En total sería 1
      this.CosteDinero = "Nivel Maximo"
    }
  }

  nivelCooldown(){
    if (this.informacion.upgrade2 == 1){
      this.progresoCooldown = this.progresoCooldown + 0.2 // En total sería 0.20
      this.CosteCooldown = 200
    } else if (this.informacion.upgrade2 == 2){
      this.progresoCooldown = this.progresoCooldown + 0.2 // En total sería 0.40
      this.CosteCooldown = 350
    } else if (this.informacion.upgrade2 == 3){
      this.progresoCooldown = this.progresoCooldown + 0.2 // En total sería 0.60
      this.CosteCooldown = 500
    } else if (this.informacion.upgrade2 == 4){
      this.progresoCooldown = this.progresoCooldown + 0.2 // En total sería 0.80
      this.CosteCooldown = 1000
    } else if (this.informacion.upgrade2 == 5){
      this.progresoCooldown = this.progresoCooldown + 0.2 // En total sería 1
      this.CosteCooldown = "Nivel Maximo"
    }
  }

  mejorarDinero(){
      if (this.informacion.upgrade1 == 0 && this.informacion.dinero >= 100) {
      this.informacion.dinero = this.informacion.dinero - 100
      this.informacion.upgrade1 = this.informacion.upgrade1 + 1
      let upgrade1 = {
        upgrade1: this.informacion.upgrade1,
        dinero: this.informacion.dinero
      }
      this.http.post(`${this.url}/upgrade1/${this.informacion.id_usuario}`, upgrade1).subscribe((Response: any) => {
      });
      this.http.post(`${this.url}/dinero/${this.informacion.id_usuario}`, upgrade1).subscribe((response: any) => {
      });
      console.log("Upgrade1 subido a nivel 1") 

    }  else if (this.informacion.upgrade1 == 1 && this.informacion.dinero >= 200) {
      this.informacion.dinero = this.informacion.dinero - 200
      this.informacion.upgrade1 = this.informacion.upgrade1 + 1
      let upgrade1 = {
        upgrade1: this.informacion.upgrade1,
        dinero: this.informacion.dinero
      }
      this.http.post(`${this.url}/upgrade1/${this.informacion.id_usuario}`, upgrade1).subscribe((Response: any) => {
      });
      this.http.post(`${this.url}/dinero/${this.informacion.id_usuario}`, upgrade1).subscribe((response: any) => {
      });
      console.log("Upgrade1 subido a nivel 2")
    } else if (this.informacion.upgrade1 == 2 && this.informacion.dinero >= 350) {
      this.informacion.dinero = this.informacion.dinero - 350
      this.informacion.upgrade1 = this.informacion.upgrade1 + 1
      let upgrade1 = {
        upgrade1: this.informacion.upgrade1,
        dinero: this.informacion.dinero
      }
      this.http.post(`${this.url}/upgrade1/${this.informacion.id_usuario}`, upgrade1).subscribe((Response: any) => {
      });
      this.http.post(`${this.url}/dinero/${this.informacion.id_usuario}`, upgrade1).subscribe((response: any) => {
      });
      console.log("Upgrade1 subido a nivel 3")

    } else if (this.informacion.upgrade1 == 3 && this.informacion.dinero >= 500) {
      this.informacion.dinero = this.informacion.dinero - 500
      this.informacion.upgrade1 = this.informacion.upgrade1 + 1
      let upgrade1 = {
        upgrade1: this.informacion.upgrade1,
        dinero: this.informacion.dinero
      }
      this.http.post(`${this.url}/upgrade1/${this.informacion.id_usuario}`, upgrade1).subscribe((Response: any) => {
      });
      this.http.post(`${this.url}/dinero/${this.informacion.id_usuario}`, upgrade1).subscribe((response: any) => {
      });
      console.log("Upgrade1 subido a nivel 4")

    } else if (this.informacion.upgrade1 == 4 && this.informacion.dinero >= 1000) {
      this.informacion.dinero = this.informacion.dinero - 1000
      this.informacion.upgrade1 = this.informacion.upgrade1 + 1
      let upgrade1 = {
        upgrade1: this.informacion.upgrade1,
        dinero: this.informacion.dinero
      }
      this.http.post(`${this.url}/upgrade1/${this.informacion.id_usuario}`, upgrade1).subscribe((Response: any) => {
      });
      this.http.post(`${this.url}/dinero/${this.informacion.id_usuario}`, upgrade1).subscribe((response: any) => {
      });
      console.log("Upgrade1 subido a nivel 5")
    }
    this.nivelDinero();
  }

  mejorarCooldown(){
    if (this.informacion.upgrade2 == 0 && this.informacion.dinero >= 100) {
      this.informacion.dinero = this.informacion.dinero - 100
      this.informacion.upgrade2 = this.informacion.upgrade2 + 1
      let upgrade2 = {
        upgrade2: this.informacion.upgrade2,
        dinero: this.informacion.dinero
      }
      this.http.post(`${this.url}/upgrade2/${this.informacion.id_usuario}`, upgrade2).subscribe((Response: any) => {
      });
      this.http.post(`${this.url}/dinero/${this.informacion.id_usuario}`, upgrade2).subscribe((response: any) => {
      });
      console.log("Upgrade2 subido a nivel 1")

  } else if (this.informacion.upgrade2 == 1 && this.informacion.dinero >= 200) {
    this.informacion.dinero = this.informacion.dinero - 200
    this.informacion.upgrade2 = this.informacion.upgrade2 + 1
    let upgrade2 = {
      upgrade2: this.informacion.upgrade2,
      dinero: this.informacion.dinero
    }
    this.http.post(`${this.url}/upgrade2/${this.informacion.id_usuario}`, upgrade2).subscribe((Response: any) => {
    });
    this.http.post(`${this.url}/dinero/${this.informacion.id_usuario}`, upgrade2).subscribe((response: any) => {
    });
    console.log("Upgrade2 subido a nivel 2")

  } else if (this.informacion.upgrade2 == 2 && this.informacion.dinero >= 350) {
    this.informacion.dinero = this.informacion.dinero - 350
    this.informacion.upgrade2 = this.informacion.upgrade2 + 1
    let upgrade2 = {
      upgrade2: this.informacion.upgrade2,
      dinero: this.informacion.dinero
    }
    this.http.post(`${this.url}/upgrade2/${this.informacion.id_usuario}`, upgrade2).subscribe((Response: any) => {
    });
    this.http.post(`${this.url}/dinero/${this.informacion.id_usuario}`, upgrade2).subscribe((response: any) => {
    });
    console.log("Upgrade2 subido a nivel 3")

  } else if (this.informacion.upgrade2 == 3 && this.informacion.dinero >= 500) {
    this.informacion.dinero = this.informacion.dinero - 500
    this.informacion.upgrade2 = this.informacion.upgrade2 + 1
    let upgrade2 = {
      upgrade2: this.informacion.upgrade2,
      dinero: this.informacion.dinero
    }
    this.http.post(`${this.url}/upgrade2/${this.informacion.id_usuario}`, upgrade2).subscribe((Response: any) => {
    });
    this.http.post(`${this.url}/dinero/${this.informacion.id_usuario}`, upgrade2).subscribe((response: any) => {
    });
    console.log("Upgrade2 subido a nivel 4")

  } else if (this.informacion.upgrade2 == 4 && this.informacion.dinero >= 1000) {
    this.informacion.dinero = this.informacion.dinero - 1000
    this.informacion.upgrade2 = this.informacion.upgrade2 + 1
    let upgrade2 = {
      upgrade2: this.informacion.upgrade2,
      dinero: this.informacion.dinero
    }
    this.http.post(`${this.url}/upgrade2/${this.informacion.id_usuario}`, upgrade2).subscribe((Response: any) => {
    });
    this.http.post(`${this.url}/dinero/${this.informacion.id_usuario}`, upgrade2).subscribe((response: any) => {
    });
    console.log("Upgrade2 subido a nivel 5")
  }
  this.nivelCooldown();
}

  botonesMejora(){

  }

  getInformacion(){
    this.http.get(`${this.url}/usuarios/${this.user_info.id}`).subscribe((response: any) => {
      this.informacion = response;
      console.log(this.informacion)
    });
  }

  Clicker(){

    this.router.navigate(['/pagina2'])
  };

}
