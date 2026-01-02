import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "./providers/auth.guard";
import {InicioComponent} from "./inicio/inicio.component";
import {ProductoComponent} from "./producto/producto.component";
import {ProveedorComponent} from "./proveedor/proveedor.component";
import {ClienteComponent} from "./cliente/cliente.component";
import {EmpleadoComponent} from "./empleado/empleado.component";
import {VentaComponent} from "./venta/venta.component";
import {CompraComponent} from "./compra/compra.component";
import {AlmacenComponent} from "./almacen/almacen.component";



  const routes:Routes=[
    {path: 'home', component:InicioComponent,canActivate:[AuthGuard]},
    {path: 'producto', component:ProductoComponent,canActivate:[AuthGuard]},
    {path: 'proveedor', component:ProveedorComponent,canActivate:[AuthGuard]},
    {path: 'cliente', component:ClienteComponent,canActivate:[AuthGuard]},
    {path: 'empleado', component:EmpleadoComponent,canActivate:[AuthGuard]},
    {path: 'venta', component:VentaComponent,canActivate:[AuthGuard]},
    {path: 'compra', component:CompraComponent,canActivate:[AuthGuard]},
    {path: 'almacen', component:AlmacenComponent,canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path:'**',redirectTo:'/login'},
  ];

  @NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })
  export class AppRoutingModule{}
