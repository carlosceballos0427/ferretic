# Generated by Django 4.1.2 on 2022-11-02 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ferretic', '0007_alter_empleado_fecha_nacimiento'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empleado',
            name='fecha_nacimiento',
            field=models.DateTimeField(),
        ),
    ]
