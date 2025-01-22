import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pagina2Page implements OnInit {

  // Variables Cooldown
  private boton_clicker = document.getElementById("boton_clicker")

  // Variables para el clicker (temporal)
  public clicks_usuario: number = 0; 
  public monedas_usuario: number = 0;

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

  getInformacion(){
    this.http.get(`http://localhost:3000/usuarios/${this.id}`).subscribe((response: any) => {
      console.log(response);
      this.user_data = response;
    });
  };

}
