
# Los serializer convierten los datos a formato json, para que puedan ser utilizados a través de una API.

from rest_framework import serializers

# importacion de modelos
from .models import RegistroFacial, Programa, Ficha, SesionLogin, Usuario, Objeto, ContactoEmergencia, Ingreso


# Serializer del Registro Facial
class RegistroFacialSerializer(serializers.ModelSerializer):
    class Meta: # se utiliza la clase Meta para definir la estructura del serializer
        model = RegistroFacial  # se define el modelo que se va a serializar
        fields = '__all__'  # se indica que se van a convertir todos los campos a formato json
        
class SesionLoginSerializer(serializers.ModelSerializer):
    class Meta: # se utiliza la clase Meta para definir la estructura del serializer
        model = SesionLogin # se define el modelo que se va a serializar
        fields = '__all__'  # se indica que se van a convertir todos los campos a formato json


# Serializer del Programa de formación
class ProgramaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programa
        fields = '__all__'


# Serializer de las Fichas de los programas de formación
class FichaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ficha
        fields = '__all__'


# Serializer de las Usuarios
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'


# Serializer de los Objetos que registran los Usuarios
class ObjetoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Objeto
        fields = '__all__'


# Serializer de los contactos de emergencia que tienen los Usuarios
class ContactoEmergenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactoEmergencia
        fields = '__all__'


# Serializer de los Ingresos de los usuarios al centro de formación
class IngresoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingreso
        fields = '__all__'

