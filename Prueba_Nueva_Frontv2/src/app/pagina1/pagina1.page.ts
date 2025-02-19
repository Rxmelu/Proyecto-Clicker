import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
 IonMenuButton, IonMenuToggle, IonListHeader, IonButton, IonFab, IonFabButton, IonFabList, IonGrid, IonCol, IonItem, IonRow} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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

  public user_info: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user_info = this.route.snapshot.params
    console.log(this.user_info)
    console.log(this.url)
  }

  Clicker(){

    this.router.navigate(['/pagina2'])
  };
}
