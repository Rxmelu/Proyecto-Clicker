import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
 IonMenuButton, IonMenuToggle, IonListHeader, IonButton, IonFab, IonFabButton, IonFabList, IonCol, IonRow, IonGrid, IonProgressBar, IonItem, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet, IonMenuButton, IonMenuToggle, IonListHeader, IonButton, IonFab, IonFabButton, IonFabList, IonCol, IonRow, IonGrid, IonProgressBar, IonItem, IonImg],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/pagina1/', icon: 'person-circle' },
    { title: 'Clicker', url: '/pagina2/', icon: 'diamond' },
    { title: 'Mejoras', url: '/folder/favorites', icon: 'cash' },
    { title: 'Leaderboard', url: '/pagina3/', icon: 'cellular' },
    { title: 'Exit', url: '/folder/trash', icon: 'exit' },
    { title: 'Login', url: '/pagina-login/', icon: 'exit' },
  ];
  constructor() {
    addIcons(icons)
  }
}
