import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: any = []

  ver_form_producto: boolean = false;
  form_producto = this.fb.group({
    id: [''],
    nombre: [''],
    valor: [''],
    marca: ['']
  })

  producto_seleccionado: any;

  constructor(private api: ApiService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.get_productos()
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

  guardar_producto() {
    this.api.post('producto', this.form_producto.value)
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_productos()
            this.ver_form_producto = false
            this.form_producto.reset()
          } else {

          }

        }
      )

  }

  update_producto() {
    this.api.update('producto', this.form_producto.value,this.form_producto.value['id'])
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_productos()
            this.ver_form_producto = false
            this.form_producto.reset()
          } else {

          }

        }
      )

  }

  llenar_formulario_producto() {
    this.form_producto.reset()
    this.form_producto.patchValue({
      id:this.producto_seleccionado.id,
      nombre:this.producto_seleccionado.nombre,
      valor:this.producto_seleccionado.valor,
      marca:this.producto_seleccionado.marca

    })
    this.ver_form_producto = true;
  }

  guardar(){
    if(this.form_producto.value['id']){
      this.update_producto()
    }else{
      this.guardar_producto()
    }
  }


}





