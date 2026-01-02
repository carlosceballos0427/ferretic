import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {
  almacen: any = []
  productos: any = []
  ventas: any = []
  compras: any = []



  ver_form_almacen: boolean = false;
  form_almacen = this.fb.group({
    id: [''],
    producto_id: [''],
    venta_id: [''],
    compra_id: [''],
  })

  almacen_seleccionado: any;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.get_almacen()
    this.get_ventas()
    this.get_productos()
    this.get_compras()

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
  get_almacen() {
    this.api.get('almacen')
      .subscribe(
        data => {
          this.almacen = data
          console.log(data)
        }
      )
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
  guardar_almacen() {
    this.api.post('almacen', this.form_almacen.value)
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_almacen()
            this.ver_form_almacen = false
            this.form_almacen.reset()
          } else {

          }
        }
      )
  }

  update_almacen() {
    this.api.update('almacen', this.form_almacen.value,this.form_almacen.value['id'])
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_ventas()
            this.ver_form_almacen = false
            this.form_almacen.reset()
          } else {

          }

        }
      )
  }

  llenar_formulario_almacen() {
    this.form_almacen.reset()
    this.form_almacen.patchValue({
      id:this.almacen_seleccionado.id,
      producto_id:this.almacen_seleccionado.producto.id,
      venta_id:this.almacen_seleccionado.venta.id,
      compra_id:this.almacen_seleccionado.compra_id,


    })
    this.ver_form_almacen = true;
  }

  guardar(){
    console.log(this.form_almacen.value)
    if(this.form_almacen.value['id']){
      this.update_almacen()
    }else{
      this.guardar_almacen()
    }
  }


}
