import { Cliente } from './../cliente/cliente.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];
  confPws: string = "";

  constructor(private alertController:AlertController){
    this.cliente = new Cliente;
  }

  addCliente(cliente: Cliente) {
    console.log(this.confPws);
    this.clientes.push(cliente);
    this.cliente = new Cliente;
    console.log(this.clientes);
    this.presentAlert("cdastrado");
  }

  async presentAlert(texto) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }
}

