import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from "primeng/api";
import { ApiService } from "./providers/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(public api: ApiService, private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Inventario',
        icon: 'pi pi-fw pi-box',
        items: [
          { label: 'Productos', icon: 'pi pi-fw pi-tag', command: () => this.router.navigate(['/producto']) },
          { label: 'Almacén', icon: 'pi pi-fw pi-home', command: () => this.router.navigate(['/almacen']) }
        ]
      },
      {
        label: 'Personas',
        icon: 'pi pi-fw pi-users',
        items: [
          { label: 'Clientes', icon: 'pi pi-fw pi-user', command: () => this.router.navigate(['/cliente']) },
          { label: 'Proveedores', icon: 'pi pi-fw pi-truck', command: () => this.router.navigate(['/proveedor']) },
          { label: 'Empleados', icon: 'pi pi-fw pi-id-card', command: () => this.router.navigate(['/empleado']) }
        ]
      },
      {
        label: 'Operaciones',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
          { label: 'Ventas', icon: 'pi pi-fw pi-plus-circle', command: () => this.router.navigate(['/venta']) },
          { label: 'Compras', icon: 'pi pi-fw pi-minus-circle', command: () => this.router.navigate(['/compra']) }
        ]
      },
      {
        label: 'Salir',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.api.logOut()
      }
    ];
  }
}
