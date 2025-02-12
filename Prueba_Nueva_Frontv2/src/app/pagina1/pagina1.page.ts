import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
 IonMenuButton, IonMenuToggle, IonListHeader, IonButton, IonFab, IonFabButton, IonFabList, IonGrid, IonCol, IonItem, IonRow} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet, IonMenuButton, IonMenuToggle, IonListHeader, IonButton,  IonFab, IonFabButton, IonFabList, IonGrid, IonCol, IonItem, IonRow, CommonModule, FormsModule]
})
export class Pagina1Page implements OnInit {

  public url: string = 'https://proyecto-clicker.onrender.com'
  // public url: string = 'https://localhost:3000/'

  public id: string = "rruiz05@colegiosantamonica.eu";
  public user_data = {
    user_id: "",
    username: "",
    dinero: 0,
    cantidad_clicks: 0,
    cantidad_generada: 0
  }

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.getInformacion();
  }

  Clicker(){

    this.router.navigate(['/pagina2'])
  };


  getInformacion(){
    this.http.get(`${this.url}/usuarios/${this.id}`).subscribe((response: any) => {
      console.log(response);
      this.user_data = response;
    });
  };
}
