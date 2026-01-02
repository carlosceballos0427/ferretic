import { Component  } from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {ApiService} from "./providers/api.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [MessageService,ConfirmationService]
})

export class AppComponent {
  items: MenuItem[] = [];


  constructor(public api:ApiService,private router:Router) {
    this.items = [
      {label:'Gestion de Producto' ,command: (event) => {
          this.router.navigate( ['/producto'])
        }},
      {label:'Gestion de Proveedor' ,command: (event) => {
          this.router.navigate( ['/proveedor'])
        }},
      {label:'Gestion de Cliente',command: (event) => {
          this.router.navigate( ['/cliente'])
        }},
      {label:'Gestion de Empleado',command: (event) => {
          this.router.navigate( ['/empleado'])
        }},
      {label:'Gestion de Venta',command: (event) => {
          this.router.navigate( ['/venta'])
        }},
      {label:'Gestion de Compra',command: (event) => {
          this.router.navigate( ['/compra'])
        }},
      {label:'Gestion de Almacen',command: (event) => {
          this.router.navigate( ['/almacen'])
        }},
      {label: 'Salir', command: (event) => {this.api.logOut()}},

    ]
  }
}

