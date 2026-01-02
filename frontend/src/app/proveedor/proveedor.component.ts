import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  proveedor: any = []

  ver_form_proveedor: boolean = false;
  form_proveedor = this.fb.group({
    id: [''],
    nombre: [''],
    direccion: [''],
    telefono: [''],
    correo: ['']
  })

  proveedor_seleccionado: any;

  constructor(private api: ApiService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.get_proveedor()
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

  guardar_proveedor() {
    this.api.post('proveedor', this.form_proveedor.value)
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_proveedor()
            this.ver_form_proveedor = false
            this.form_proveedor.reset()
          } else {

          }

        }
      )

  }

  update_proveedor() {
    this.api.update('proveedor', this.form_proveedor.value,this.form_proveedor.value['id'])
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_proveedor()
            this.ver_form_proveedor = false
            this.form_proveedor.reset()
          } else {

          }

        }
      )

  }

  llenar_formulario_proveedor() {
    this.form_proveedor.reset()
    this.form_proveedor.patchValue({
      id:this.proveedor_seleccionado.id,
      nombre:this.proveedor_seleccionado.nombre,
      direccion:this.proveedor_seleccionado.direccion,
      telefono:this.proveedor_seleccionado.telefono,
      correo:this.proveedor_seleccionado.correo


    })
    this.ver_form_proveedor = true;
  }

  guardar(){
    if(this.form_proveedor.value['id']){
      this.update_proveedor()
    }else{
      this.guardar_proveedor()
    }
  }


}





