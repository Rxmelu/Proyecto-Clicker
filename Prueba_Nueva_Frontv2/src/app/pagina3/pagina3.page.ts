import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
 IonMenuButton, IonMenuToggle, IonListHeader, IonButton, IonFab, IonFabButton, IonFabList, IonItem, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet, IonMenuButton, IonMenuToggle, IonListHeader, IonButton, IonFab, IonFabButton, IonFabList, IonItem, IonCol, IonGrid, IonRow, CommonModule, FormsModule]
})
export class Pagina3Page implements OnInit {

    // variables URL
    public url: string = 'https://proyecto-clicker.onrender.com'
    // public url: string = 'https://localhost:3000/'

    public usuarios: any = [
    ]

    public usuarios2: any = [
    ]

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.cargarDinero();
    this.cargarClicks();
    console.log(this.usuarios)
    
  }

  Clicker(){

    this.router.navigate(['/pagina2'])
  };

  cargarClicks(){
    this.http.get(`${this.url}/leader_clicks`).subscribe((response: any) => {
      this.usuarios = response;
    });
  }

  cargarDinero(){
    this.http.get(`${this.url}/leader_dinero`).subscribe((response: any) => {
      this.usuarios2 = response;
    });
  }
}
