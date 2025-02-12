import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
 IonMenuButton, IonMenuToggle, IonListHeader, IonButtons, IonFab, IonFabButton, IonFabList, IonProgressBar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-pagina-upgrades',
  templateUrl: './pagina-upgrades.page.html',
  styleUrls: ['./pagina-upgrades.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet, IonMenuButton, IonMenuToggle, IonListHeader, IonButtons, IonFab, IonFabButton, IonFabList, CommonModule, FormsModule, IonProgressBar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginaUpgradesPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  mejorarCooldown(){}

  mejorarDinero(){}

}
