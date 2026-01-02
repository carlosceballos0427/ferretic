import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  compras: any = []
  productos: any = []
  proveedor: any = []
  empleados: any = []

  ver_form_compra: boolean = false;
  form_compra = this.fb.group({
    id: [''],
    producto_id: [''],
    proveedor_id: [''],
    empleado_id: [''],
    cantidad_compra: [''],
    valor_compra: [''],
    fecha_compra: [''],

  })

  compra_seleccionado: any;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.get_compras()
    this.get_productos()
    this.get_proveedor()
    this.get_empleados()

  }
  get_compras() {
    this.api.get('compra')
      .subscribe(
        data => {
          this.compras = data
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
  get_proveedor() {
    this.api.get('proveedor')
      .subscribe(
        data => {
          this.proveedor = data
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

  guardar_compra() {
    this.api.post('compra', this.form_compra.value)
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_compras()
            this.ver_form_compra = false
            this.form_compra.reset()
          } else {

          }
        }
      )
  }

  update_compra() {
    this.api.update('compra', this.form_compra.value,this.form_compra.value['id'])
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_compras()
            this.ver_form_compra= false
            this.form_compra.reset()
          } else {

          }

        }
      )
  }

  llenar_formulario_compra() {
    this.form_compra.reset()
    this.form_compra.patchValue({
      id:this.compra_seleccionado.id,
      producto_id:this.compra_seleccionado.producto.id,
      proveedor_id:this.compra_seleccionado.proveedor.id,
      empleado_id:this.compra_seleccionado.empleado.id,
      cantidad_compra:this.compra_seleccionado.cantidad_compra,
      valor_compra:this.compra_seleccionado.valor_compra,
      fecha_compra:this.compra_seleccionado.fecha_compra

    })
    this.ver_form_compra = true;
  }

  guardar(){
    console.log(this.form_compra.value)
    if(this.form_compra.value['id']){
      this.update_compra()
    }else{
      this.guardar_compra()
    }
  }
}

