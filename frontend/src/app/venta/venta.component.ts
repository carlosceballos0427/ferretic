import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  ventas: any = []
  productos: any = []
  clientes: any = []
  empleados: any = []

  ver_form_venta: boolean = false;
  form_venta = this.fb.group({
    id: [''],
    producto_id: [''],
    cliente_id: [''],
    empleado_id: [''],
    cantidad_venta: [''],
    valor_venta: [''],
    fecha_venta: [''],
  })

  venta_seleccionado: any;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.get_ventas()
    this.get_productos()
    this.get_clientes()
    this.get_empleados()

  }
  get_ventas() {
    this.api.get('venta')
      .subscribe(
        data => {
          this.ventas = data
          console.log(data)
        }
      )
  }
  get_productos() {
    this.api.get('producto')
      .subscribe(
        data => {
          this.productos = data
          console.log(data)
        }
      )
  }
  get_clientes() {
    this.api.get('cliente')
      .subscribe(
        data => {
          this.clientes = data
          console.log(data)
        }
      )
  }
  get_empleados() {
    this.api.get('empleado')
      .subscribe(
        data => {
          this.empleados = data
          console.log(data)
        }
      )
  }

  guardar_venta() {
    this.api.post('venta', this.form_venta.value)
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_ventas()
            this.ver_form_venta = false
            this.form_venta.reset()
          } else {

          }
        }
      )
  }

  update_venta() {
    this.api.update('venta', this.form_venta.value,this.form_venta.value['id'])
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_ventas()
            this.ver_form_venta = false
            this.form_venta.reset()
          } else {

          }

        }
      )
  }

  llenar_formulario_venta() {
    this.form_venta.reset()
    this.form_venta.patchValue({
      id:this.venta_seleccionado.id,
      producto_id:this.venta_seleccionado.producto.id,
      cliente_id:this.venta_seleccionado.cliente.id,
      empleado_id:this.venta_seleccionado.empleado.id,
      cantidad_venta:this.venta_seleccionado.cantidad_venta,
      valor_venta:this.venta_seleccionado.valor_venta,
      fecha_venta:this.venta_seleccionado.fecha_venta

    })
    this.ver_form_venta = true;
  }

  guardar(){
    console.log(this.form_venta.value)
    if(this.form_venta.value['id']){
      this.update_venta()
    }else{
      this.guardar_venta()
    }
  }


}

