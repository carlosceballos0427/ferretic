import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "./app-routing.module";
import { ApiService } from "./providers/api.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InicioComponent } from './inicio/inicio.component';
import { AuthGuard } from "./providers/auth.guard";
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { RippleModule } from "primeng/ripple";
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { VentaComponent } from './venta/venta.component';
import { CompraComponent } from './compra/compra.component';
import { AlmacenComponent } from './almacen/almacen.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    ProductoComponent,
    ProveedorComponent,
    ClienteComponent,
    EmpleadoComponent,
    VentaComponent,
    CompraComponent,
    AlmacenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    RippleModule,
    DialogModule,
    DropdownModule,
    AvatarModule,
    BadgeModule,
    ProgressBarModule,
    ToastModule,


  ],
  providers: [ApiService, AuthGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

