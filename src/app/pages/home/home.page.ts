import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario:string=""


  constructor(private navCtrl: NavController) { }

  ngOnInit(): void {
    this.usuario=localStorage.getItem("usuario") ?? ''
  }

  irAlLogin() {
    this.navCtrl.navigateForward(['/login']);
    
  }
}
