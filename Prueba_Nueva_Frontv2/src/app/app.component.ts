
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import { personCircleSharp, personCircleOutline, cashOutline, cashSharp, cellularOutline, cellularSharp, exitOutline, exitSharp, diamondSharp, diamondOutline} from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonicModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/folder/', icon: 'person-circle' },
    { title: 'Clicker', url: '/pagina2/', icon: 'diamond' },
    { title: 'Mejoras', url: '/folder/favorites', icon: 'cash' },
    { title: 'Leaderboard', url: '/folder/archived', icon: 'cellular' },
    { title: 'Exit', url: '/folder/trash', icon: 'exit' },
  ];
  constructor() {
    addIcons({ personCircleSharp, personCircleOutline, cashSharp, cashOutline, cellularOutline, cellularSharp, exitOutline, exitSharp, diamondOutline, diamondSharp});
  }
}
