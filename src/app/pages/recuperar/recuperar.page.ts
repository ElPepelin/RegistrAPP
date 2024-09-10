import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  usuarioP: string=""
  usuario: string=""
  usu: string=""

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController) { }

  ngOnInit(){

  }






}
