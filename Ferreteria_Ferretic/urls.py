from rest_framework import routers
from django.urls import path, include
from ferretic.views import *

router = routers.DefaultRouter()
router.register("producto", Producto_view, basename="producto")
router.register("cliente", Cliente_view, basename="cliente")
router.register("proveedor", Proveedor_view, basename="proveedor")
router.register("empleado", Empleado_view, basename="empleado")
router.register("ventas", Venta_view, basename="ventas")
router.register("compras", Compras_view, basename="compras")
router.register("usuario", Usuario_view, basename="usuario")




urlpatterns = [
  path('', include(router.urls)),
  path("token", TokenProvider.as_view(),name = "token")

]

