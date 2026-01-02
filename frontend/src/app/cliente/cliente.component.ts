import { Component, OnInit } from '@angular/core';
import { ApiService } from "../providers/api.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any = []
  cliente_seleccionado: any;
  ver_form_cliente: boolean = false;

  form_cliente = this.fb.group({
    id: [''],
    cliente: ['', Validators.required],
    direccion: [''],
    telefono: [''],
    correo: ['', [Validators.email]]
  })

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.get_clientes()
  }

  get_clientes() {
    this.api.get('cliente').subscribe(data => this.clientes = data)
  }

  guardar_cliente() {
    this.api.post('cliente', this.form_cliente.value).subscribe(data => {
      if (data) {
        this.get_clientes();
        this.ver_form_cliente = false;
        this.form_cliente.reset();
      }
    })
  }

  update_cliente() {
    this.api.update('cliente', this.form_cliente.value, this.form_cliente.value['id']).subscribe(data => {
      if (data) {
        this.get_clientes();
        this.ver_form_cliente = false;
        this.form_cliente.reset();
      }
    })
  }

  llenar_formulario_cliente() {
    this.form_cliente.reset();
    this.form_cliente.patchValue({
      id: this.cliente_seleccionado.id,
      cliente: this.cliente_seleccionado.cliente,
      direccion: this.cliente_seleccionado.direccion,
      telefono: this.cliente_seleccionado.telefono,
      correo: this.cliente_seleccionado.correo
    });
    this.ver_form_cliente = true;
  }

  guardar() {
    if (this.form_cliente.value['id']) {
      this.update_cliente();
    } else {
      this.guardar_cliente();
    }
  }
}
