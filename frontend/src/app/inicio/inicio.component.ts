import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../providers/api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  stats = {
    productos: 0,
    ventas_count: 0,
    ventas_valor: 0,
    clientes: 0,
    empleados: 0
  };

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats() {
    forkJoin({
      productos: this.api.get('producto'),
      ventas: this.api.get('venta'),
      clientes: this.api.get('cliente'),
      empleados: this.api.get('empleado')
    }).subscribe((data: any) => {
      this.stats.productos = data.productos.length;
      this.stats.ventas_count = data.ventas.length;
      this.stats.clientes = data.clientes.length;
      this.stats.empleados = data.empleados.length;

      this.stats.ventas_valor = data.ventas.reduce((acc: number, curr: any) => acc + (curr.valor_venta || 0), 0);
    });
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }

}
