import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


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
  public id: string = "rruiz05@colegiosantamonica.eu";
  public user_data = {
    user_id: "",
    username: "",
    dinero: 0,
    cantidad_clicks: 0,
  }

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.getInformacion();
  }

  handleClick(): any {
    if (this.isCooldown) return;

    this.isCooldown = true;

    setTimeout(() => {
      this.isCooldown = false;
    }, this.cooldownTime);
  }

  Clicker(){
    this.user_data.dinero = this.user_data.dinero + 1;
    this.user_data.cantidad_clicks = this.user_data.cantidad_clicks + 1;
    if (this.user_data.cantidad_clicks == 110){
      let boton = document.getElementById('boton_clicker')
      boton?.remove()
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
  getInformacion(){
    this.http.get(`http://localhost:3000/usuarios/${this.id}`).subscribe((response: any) => {
      this.user_data = response;
    });
  };

}
