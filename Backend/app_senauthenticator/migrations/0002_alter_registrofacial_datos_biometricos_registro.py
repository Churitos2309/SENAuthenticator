# Generated by Django 4.1.13 on 2024-06-20 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_senauthenticator', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registrofacial',
            name='datos_biometricos_registro',
            field=models.ImageField(upload_to='datos_biometricos_registro'),
        ),
    ]
