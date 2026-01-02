import { Component, OnInit } from '@angular/core';
import { ApiService } from "../providers/api.service";

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {
  productos: any = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.get_productos()
  }

  get_productos() {
    this.api.get('producto').subscribe(data => {
      this.productos = data;
    });
  }
}
