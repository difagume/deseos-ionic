import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

    index: number;
    lista: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.index = this.navParams.get("index");
        this.lista = this.navParams.get("lista");
    }

    ngOnInit() { }
}