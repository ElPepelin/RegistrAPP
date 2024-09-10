import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string=""
  contrasena:string=""

  constructor( private navCtrl:NavController,
               private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  validar() {
    if (this.usuario == "pepe" && this.contrasena == "pepe123") {
        localStorage.setItem("usuario", this.usuario)
        this.navCtrl.navigateForward(['/home'])
    } else if (this.usuario == "tapia" && this.contrasena == "lovers") { 
        localStorage.setItem("usuarioP", this.usuario)
        this.navCtrl.navigateForward(['/profesor'])
    } else {
        this.presentAlert(); // Maneja cualquier caso que no cumpla con las condiciones anteriores
    }
}


  async presentAlert() {
      const alert = await this.alertCtrl.create({
          header: "Login",
          subHeader: "Validacion Usuario",
          message: "usuario/contraseña incorrecto",
          buttons: ['Ok'],
      });
      await alert.present();
  }

  recuperar(){
    this.navCtrl.navigateForward(['/recuperar'])
  }

}