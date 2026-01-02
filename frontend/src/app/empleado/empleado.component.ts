import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleados: any = []

  ver_form_empleado: boolean = false;
  form_empleado = this.fb.group({
    id: [''],
    nombre: [''],
    direccion: [''],
    telefono: [''],
    correo: [''],

  })

  empleado_seleccionado: any;

  constructor(private api: ApiService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.get_empleados()
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

  guardar_empleado() {
    this.api.post('empleado', this.form_empleado.value)
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_empleados()
            this.ver_form_empleado = false
            this.form_empleado.reset()
          } else {

          }

        }
      )
  }

  update_empleado() {
    this.api.update('empleado', this.form_empleado.value,this.form_empleado.value['id'])
      .subscribe(
        data => {
          if (data != undefined) {
            this.get_empleados()
            this.ver_form_empleado = false
            this.form_empleado.reset()
          } else {

          }

        }
      )
  }

  llenar_formulario_empleado() {
    this.form_empleado.reset()
    this.form_empleado.patchValue({
      id:this.empleado_seleccionado.id,
      nombre:this.empleado_seleccionado.nombre,
      direccion:this.empleado_seleccionado.direccion,
      telefono:this.empleado_seleccionado.telefono,
      correo:this.empleado_seleccionado.correo,

    })
    this.ver_form_empleado = true;
  }

  guardar(){
    if(this.form_empleado.value['id']){
      this.update_empleado()
    }else{
      this.guardar_empleado()
    }
  }


}
