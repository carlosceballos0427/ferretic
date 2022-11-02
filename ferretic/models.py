from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class Producto(models.Model):
    producto = models.CharField(max_length=200)
    valor = models.IntegerField()
    marca = models.CharField(max_length=100)
    def __str__(self):
        return self.producto

class Proveedor(models.Model):
    proveedor = models.CharField(max_length=200)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=10)
    correo = models.CharField(max_length=50)

    def __str__(self):
        return self.proveedor

class Cliente(models.Model):
    cliente = models.CharField(max_length=200)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=10)
    correo = models.CharField(max_length=50)

    def __str__(self):
        return self.cliente


"""class Usuario(AbstractUser):
  nombres_apellidos = models.CharField(max_length=50)
  telefono = models.CharField(max_length=10)
  correo = models.CharField(max_length=50)
  token = models.CharField(max_length=100)"""


class Empleado(models.Model):
    empleado = models.CharField(max_length=200)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=10)
    correo = models.CharField(max_length=50)
    fecha_nacimiento = models.DateTimeField(auto_now=False)

    def __str__(self):
        return self.empleado


class Venta(models.Model):
    fecha_venta = models.DateTimeField(auto_now=False)
    producto = models.ForeignKey(Producto, on_delete=models.PROTECT)
    cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)
    empleado = models.ForeignKey(Empleado, on_delete=models.PROTECT)
    cantidad_venta = models.IntegerField()
    valor_venta = models.IntegerField()



class Compras(models.Model):
    fecha_compra = models.DateTimeField(auto_now=False)
    proveedor = models.ForeignKey(Proveedor, on_delete=models.PROTECT)
    producto = models.ForeignKey(Producto, on_delete=models.PROTECT)
    empleado = models.ForeignKey(Empleado, on_delete=models.PROTECT)
    cantidad_compra = models.IntegerField()
    valor_compra = models.IntegerField()



class Almacen(models.Model):
    cantidad_compra = models.ForeignKey(Compras, on_delete=models.PROTECT)
    cantidad_venta = models.ForeignKey(Venta, on_delete=models.PROTECT)






















