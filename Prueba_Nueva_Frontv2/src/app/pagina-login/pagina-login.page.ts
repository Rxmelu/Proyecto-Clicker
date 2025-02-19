import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
 IonMenuButton, IonMenuToggle, IonListHeader, IonButton, IonFab, IonFabButton, IonFabList, IonImg, IonGrid, IonRow} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.page.html',
  styleUrls: ['./pagina-login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet, IonMenuButton, IonMenuToggle, IonListHeader, IonButton, IonFab, IonFabButton, IonFabList, IonImg, IonGrid, IonRow, CommonModule, FormsModule]
})
export class PaginaLoginPage implements OnInit {

  constructor(private auth: AuthService, @Inject (DOCUMENT) public document: Document) { }

  private audio_botones = new Audio('/assets/sounds/BotonSeleccionar.mp3')
  private audio_fondo = new Audio('/assets/sounds/click.mp3')


  ngOnInit() {
    this.audio_fondo.volume = 0.03
    this.audio_fondo.loop = true
    this.audio_fondo.play()
  }

  login() {
    this.audio_botones.play()
    setTimeout(() => {
    this.auth.loginWithRedirect({
            appState: {
        target: '/pagina2'
        }
    });
  }, 900);
      }

    logout(){
      this.audio_botones.play()
      setTimeout(() => {
      this.auth.logout ({
        logoutParams: {
          returnTo: this.document.location.origin
        }
      });
  }, 900);
    }
  }
