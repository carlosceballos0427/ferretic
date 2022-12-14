# Generated by Django 4.1.2 on 2022-10-31 15:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_cliente', models.CharField(max_length=200)),
                ('direccion', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=10)),
                ('correo', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Empleado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_empleado', models.CharField(max_length=200)),
                ('direccion', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=10)),
                ('correo', models.CharField(max_length=50)),
                ('fecha_nacimiento', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_producto', models.CharField(max_length=200)),
                ('valor', models.IntegerField()),
                ('marca', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Proveedor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_proveedor', models.CharField(max_length=200)),
                ('direccion', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=10)),
                ('correo', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Ventas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_venta', models.DateTimeField()),
                ('cantidad_venta', models.IntegerField()),
                ('valor_venta', models.IntegerField()),
                ('empleado', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='ferretic.empleado')),
                ('nombre_cliente', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='ferretic.cliente')),
                ('nombre_producto', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='ferretic.producto')),
            ],
        ),
        migrations.CreateModel(
            name='Compras',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_venta', models.DateTimeField()),
                ('cantidad_compra', models.IntegerField()),
                ('valor_compra', models.IntegerField()),
                ('empleado', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='ferretic.empleado')),
                ('nombre_producto', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='ferretic.producto')),
                ('nombre_proveedor', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='ferretic.proveedor')),
            ],
        ),
        migrations.CreateModel(
            name='Almacen',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad_compra', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='ferretic.compras')),
                ('cantidad_venta', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='ferretic.ventas')),
            ],
        ),
    ]
