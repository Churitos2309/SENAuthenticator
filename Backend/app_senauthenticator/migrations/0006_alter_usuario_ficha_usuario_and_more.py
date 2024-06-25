# Generated by Django 4.1.13 on 2024-06-24 17:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app_senauthenticator', '0005_contactoemergencia_numero_documento_cntemerg_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='ficha_usuario',
            field=models.ForeignKey(db_column='ficha_usuario', null=True, on_delete=django.db.models.deletion.PROTECT, to='app_senauthenticator.ficha'),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='registro_facial_usuario',
            field=models.ForeignKey(db_column='registro_facial_usuario', null=True, on_delete=django.db.models.deletion.PROTECT, to='app_senauthenticator.registrofacial'),
        ),
    ]