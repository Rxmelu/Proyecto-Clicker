import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { analytics } from 'ionicons/icons';


@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Pagina2Page implements OnInit {

  // Variables Cooldown
  public cooldownTime: number = 2000;
  public isCooldown: boolean = false;

  // Variables y Array para Información del Usuario 
  public user_data = {
    user_id: "",
    username: "",
    dinero: 0,
    cantidad_clicks: 0,
  }
  public user: any;

  
  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  accion(opcion: string) {
    console.log('Seleccionaste:', opcion);
    alert(`Seleccionaste: ${opcion}`);
  }

  ngOnInit() {
    //this.getInformacion();

    this.auth.user$.subscribe((data) => {
      this.user = data
      console.log(this.user)

      this.loadUser();
    });
  }
  
  loadUser(){
    this.http.get(`http://localhost:3000/usuarios/${this.user.email}`).subscribe((response: any) => {
      this.user_data = response;
      if(response == "Usuario no encontrado."){
        this.createUser();
      }
    });
}

createUser(){
  let user = {
    user_id: this.user.email,
    username: this.user.username,
    dinero: this.user_data.dinero,
    cantidad_clicks: this.user_data.cantidad_clicks
  }
  this.http.post(`http://localhost:3000/usuarios`, user).subscribe((response) => {
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
    this.user_data.dinero = this.user_data.dinero + 1;
    this.user_data.cantidad_clicks = this.user_data.cantidad_clicks + 1;
    if (this.user_data.cantidad_clicks == 110){
      let galleta = document.getElementById('boton_clicker')
      galleta?.remove()
    }
  }


  // Navegadores a otras paginas
  Profile(){

    this.router.navigate(['/pagina1'])
  };

  Upgrades(){
    
    this.router.navigate(['/pagina1'])
  };

  Leaderboard(){
    
    this.router.navigate(['/pagina3'])
  };

  Exit(){
    
    this.router.navigate(['/pagina1'])
  };

  // GET para conseguir la información del usuario
 //  getInformacion(){
    // this.http.get(`http://localhost:3000/usuarios/${this.id}`).subscribe((response: any) => {
      // this.user_data = response;
    //});
  //}

  // POST para actualizar el dinero del usuario
  updateDinero(){
    let dinero = {
      dinero: this.user_data.dinero
    };

    this.http.post(`http://localhost:3000/dinero`, dinero).subscribe((Response: any) => {
    });
  }

  // POST para actualizar los clicks del usuario
  updateClicks(){
    let cantidad_clicks = {
      cantidad_clicks: this.user_data.cantidad_clicks
    };

    this.http.post(`http://localhost:3000/clicks`, cantidad_clicks).subscribe((Response: any) => {
    });
  }

}
