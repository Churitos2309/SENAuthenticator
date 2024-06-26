# Generated by Django 4.1.13 on 2024-06-26 06:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app_senauthenticator', '0007_alter_contactoemergencia_apellido_cntemerg_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='SesionLogin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(db_column='username', max_length=100)),
                ('password', models.CharField(db_column='password', max_length=30)),
            ],
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='registro_facial_usuario',
        ),
        migrations.AddField(
            model_name='registrofacial',
            name='usuario_registro_facial',
            field=models.ForeignKey(db_column='usuario_registro_facial', null=True, on_delete=django.db.models.deletion.PROTECT, to='app_senauthenticator.usuario'),
        ),
    ]
