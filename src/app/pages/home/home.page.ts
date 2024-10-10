import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario:string=""
  private values: string[] = ['first', 'second', 'third'];

  constructor(private navCtrl: NavController) { }

  ngOnInit(): void {
    this.usuario=localStorage.getItem("usuario") ?? ''
  }

  irAlLogin() {
    this.navCtrl.navigateForward(['/login']);
    
  }

  accordionGroupChange = (ev: any) => {
    const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    console.log(
      `Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value} | Collapsed: ${collapsedItems.join(', ')}`
    );
  };
}
