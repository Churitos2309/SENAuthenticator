from django.contrib import admin
from .models import RegistroFacial, Programa, Ficha, Usuario, Objeto, ContactoEmergencia, Ingreso, SesionLogin, Profile

# Register your models here.
admin.site.register(RegistroFacial)
admin.site.register(Programa)
admin.site.register(Ficha)
admin.site.register(Usuario)
admin.site.register(Objeto)
admin.site.register(ContactoEmergencia)
admin.site.register(Ingreso)
admin.site.register(SesionLogin)
admin.site.register(Profile)