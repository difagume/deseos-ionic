import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent implements OnInit {

    nombreLista: string = "";
    nombreItem: string = "";

    items: ListaItem[] = [];

    constructor(private _listaDeseos: ListaDeseosService,
        private alertCtrl: AlertController,
        private navCtrl: NavController) { }

    ngOnInit() { }

    agregar() {
        if (this.nombreItem.length == 0) {
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push(item);

        this.nombreItem = "";
    }

    borrarItem(index: number) {
        this.items.splice(index, 1);
    }

    guardarLista() {
        if (this.nombreLista.length == 0) {
            this.showAlert();
            return;
        }

        let lista = new Lista(this.nombreLista);
        lista.items = this.items;

        // Se envia la "lista" al arreglo de listas que se encuentra en el servicio
        // this._listaDeseos.listas.push(lista);

        /* Se envia la "lista" al arreglo de listas que se encuentra en el servicio
        y se la coloca en el localStorage */
        this._listaDeseos.agregarLista(lista);

        // Retornamos a la pantalla principal
        this.navCtrl.pop();
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Aviso',
            subTitle: 'El nombre de la lista es necesario!',
            buttons: ['OK']
        });
        alert.present();
    }

}