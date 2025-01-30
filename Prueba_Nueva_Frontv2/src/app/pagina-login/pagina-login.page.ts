import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.page.html',
  styleUrls: ['./pagina-login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PaginaLoginPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.loginWithRedirect({
            appState: {
        target: '/pagina2'
        }
    });
      }
  }
