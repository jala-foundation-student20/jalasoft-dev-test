# Generated by Django 4.2 on 2023-10-14 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='email',
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterModelTable(
            name='users',
            table='user',
        ),
    ]
