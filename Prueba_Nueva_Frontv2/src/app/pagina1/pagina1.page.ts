import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pagina1Page implements OnInit {

  public id: string = "rruiz05@colegiosantamonica.eu";
  public user_data = {
    user_id: "",
    username: "",
    dinero: 0,
    cantidad_clicks: 0,
    cantidad_generada: 0
  }

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getInformacion();
  }

  getInformacion(){
    this.http.get(`http://localhost:3000/usuarios/${this.id}`).subscribe((response: any) => {
      console.log(response);
      this.user_data = response;
    });
  };
}
