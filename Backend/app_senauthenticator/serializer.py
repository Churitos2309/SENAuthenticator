
# Los serializer convierten los tipos de datos a formato json, para que puedan ser utilizados a través de una API.

from rest_framework import serializers

# importacion de modelos
from .models import RegistroFacial, Programa, Ficha, Usuario, Objeto, ContactoEmergencia, Ingreso


# Serializer del Registro Facial
class RegistroFacialSerializer(serializers.ModelSerializer):
    class Meta: # se utiliza la clase Meta para definir la estructura del serializer
        model = RegistroFacial  # se define el modelo
        fields = '__all__'  # indica que va a utilizar todos los campos del modelo


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
        fields = ('nombre_usuario', 'apellidos_usuario', 'genero_usuario', 
                 'correo_institucional_usuario', 'correo_personal_usuario', 
                 'tipo_documento_usuario', 'numero_documento_usuario',
                 'rol_usuario', 'registro_facial_usuario', 'contacto_emergencia_usuario',
                 'ficha_usuario')


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