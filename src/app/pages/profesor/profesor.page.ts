import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  usuarioP: string = "";
  codigoQR: string = '';

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async generarCodigoQR() {
    const textoParaQR = 'ClaseID-25';
    this.codigoQR = await QRCode.toDataURL(textoParaQR);
  }
}