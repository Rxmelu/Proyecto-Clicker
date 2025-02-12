import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { addIcons } from 'ionicons';
import { analytics, logIn, menuOutline } from 'ionicons/icons';


@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Pagina2Page implements OnInit {

  // Audios
  private audio_click = new Audio('/assets/sounds/galleta_sonido.mp3')

  // Variables Dinero y Clicks
  public Suma_Dinero: number = 1

  // Variables Cooldown
  public cooldownTime: number = 2000;
  public isCooldown: boolean = false;

  // Variables y Array para Información del Usuario 
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

  
  constructor(private http: HttpClient, private router: Router, private auth: AuthService, @Inject (DOCUMENT) public document: Document) { }

  ngOnInit() {

    this.auth.user$.subscribe((data) => {
      this.user = data
      console.log(this.user)

      this.loadUser();
    });
  }
  
  loadUser(){
    this.http.get(`http://localhost:3000/usuarios/${this.user.email}`).subscribe((response: any) => {
      this.usuarios = response;
      if(response == "Usuario no encontrado."){
        this.createUser();
      }

      // Aplicar Mejoras Dinero
      if (this.usuarios.upgrade1 == 1){
        console.log("Mejora_1 Nivel 1")
        this.Suma_Dinero = 2
      } else if (this.usuarios.upgrade1 == 2) {
        console.log("Mejora_1 Nivel 2")
        this.Suma_Dinero = 4
      } else if (this.usuarios.upgrade1 == 3) {
        console.log("Mejora_1 Nivel 3")
        this.Suma_Dinero = 6
      } else if (this.usuarios.upgrade1 == 4) {
        console.log("Mejora_1 Nivel 4")
        this.Suma_Dinero = 8
      } else if (this.usuarios.upgrade1 == 5) {
        console.log("Mejora_1 Nivel 5")
        this.Suma_Dinero = 10
      }

      // Aplicar Mejora Cooldown
      if (this.usuarios.upgrade2 == 1){
          this.cooldownTime = 1500
          console.log("Mejora_2 Nivel 1")
          console.log(this.cooldownTime)
      } else if (this.usuarios.upgrade2 == 2) {
          this.cooldownTime = 1000
          console.log("Mejora_2 Nivel 2")
          console.log(this.cooldownTime)
      } else if (this.usuarios.upgrade2 == 3) {
          this.cooldownTime = 700
          console.log("Mejora_2  Nivel 3")
          console.log(this.cooldownTime)
      } else if (this.usuarios.upgrade2 == 4) {
          this.cooldownTime = 400
          console.log("Mejora_2 Nivel 4")
          console.log(this.cooldownTime)
      } else if (this.usuarios.upgrade2 == 5) {
          this.cooldownTime = 0
          console.log("Mejora_2 Nivel 5")
          console.log(this.cooldownTime)
      }
      
    });
}

createUser(){
  let usuarios = {
    id_usuario: this.user.email,
    username: this.user.nickname,
    dinero: 0,
    cantidad_clicks: 0,
    cantidad_generada: 0,
    upgrade1: 0,
    upgrade2: 0,
  }
  this.http.post(`http://localhost:3000/usuarios`, usuarios).subscribe((response) => {
    console.log(response)
  })
}

  // Funciones para el Cooldown
  CooldownImagen(){
    if (!this.isCooldown){
      this.activarCooldown();
    }
  }

  activarCooldown(){
      this.isCooldown = true;

      setTimeout(() => {
        this.isCooldown = false;
      }, this.cooldownTime);
    }


  // Funcion del Clicker
  Clicker(){
    this.audio_click.play()
    this.usuarios.dinero = this.usuarios.dinero + this.Suma_Dinero;
    this.usuarios.cantidad_clicks = this.usuarios.cantidad_clicks + 1;
    if (this.usuarios.cantidad_clicks == 10000){
      let galleta = document.getElementById('boton_clicker')
      galleta?.remove()
    }
  }


  // Navegadores a otras paginas
  Profile(){

    this.router.navigate(['/pagina1'])
  };

  Upgrades(){
    
    this.router.navigate(['/pagina-upgrades'])
  };

  Leaderboard(){
    
    this.router.navigate(['/pagina3'])
  };

  Exit(){
    this.auth.logout ({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  };

  Login(){
    this.router.navigate(['/pagina-login'])
  };

  // POST para actualizar el dinero del usuario
  updateDinero(){
    let dinero = {
      dinero: this.usuarios.dinero
    };

    this.http.post(`http://localhost:3000/dinero/${this.user.email}`, dinero).subscribe((Response: any) => {
    });
  }

  // POST para actualizar los clicks del usuario
  updateClicks(){
    let cantidad_clicks = {
      cantidad_clicks: this.usuarios.cantidad_clicks
    };

    this.http.post(`http://localhost:3000/clicks/${this.user.email}`, cantidad_clicks).subscribe((Response: any) => {
    });
  }

}
