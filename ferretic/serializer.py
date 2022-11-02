from rest_framework import serializers
from ferretic.models import *

"""class Usuario_serializer(serializers.ModelSerializer):
   class Meta:
       model = Usuario
       fields = "__all__"
   def create(self,validated_data):
       user = Usuario(
           username=validated_data["username"],
           nombres_apellidos=validated_data["nombres_apellidos"],
           correo=validated_data["correo"],
           telefono=validated_data["telefono"],
       )
       user.set_password(validated_data["password"])
       user.save()
       return user"""


class Producto_serializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = "__all__"

class Proveedor_serializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = "__all__"

class Cliente_serializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = "__all__"

class Empleado_serializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = "__all__"

class Venta_serializer(serializers.ModelSerializer):
    producto = Producto_serializer(read_only=True)
    producto_id = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Producto.objects.all(), source="producto")
    cliente = Cliente_serializer(read_only=True)
    cliente_id = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Cliente.objects.all(), source="cliente")
    empleado = Empleado_serializer(read_only=True)
    empleado_id = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Empleado.objects.all(), source="empleado")
    class Meta:
        model = Venta
        fields = "__all__"


class Compras_serializer(serializers.ModelSerializer):
    producto = Producto_serializer(read_only=True)
    producto_id = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Producto.objects.all(),source="producto")
    proveedor = Proveedor_serializer(read_only=True)
    proveedor_id = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Proveedor.objects.all(), source="proveedor")
    empleado = Empleado_serializer(read_only=True)
    empleado_id = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Empleado.objects.all(), source="empleado")
    class Meta:
        model = Compras
        fields = "__all__"

class Almacen_serializer(serializers.ModelSerializer):
    cantidad_compra = Producto_serializer(read_only=True)
    cantidad_compra_id = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Compras.objects.all(), source="cantidad_compra")
    cantidad_venta = Proveedor_serializer(read_only=True)
    cantidad_venta_id = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Venta.objects.all(), source="cantidad_venta")
    class Meta:
        model = Almacen
        fields = "__all__"





