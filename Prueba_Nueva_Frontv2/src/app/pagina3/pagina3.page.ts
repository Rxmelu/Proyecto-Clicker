import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
 IonMenuButton, IonMenuToggle, IonListHeader, IonButton, IonFab, IonFabButton, IonFabList, IonItem, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet, IonMenuButton, IonMenuToggle, IonListHeader, IonButton, IonFab, IonFabButton, IonFabList, IonItem, IonCol, IonGrid, IonRow, CommonModule, FormsModule]
})
export class Pagina3Page implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
