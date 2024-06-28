
# Los serializadores convierten los datos a formato json, para que puedan ser utilizados a través de una API.

from rest_framework import serializers

# importacion de modelos
from app_senauthenticator.models import RegistroFacial


# Serializador del Registro Facial
class RegistroFacialSerializer(serializers.ModelSerializer):
    class Meta: # Se utiliza la clase Meta para definir la estructura del serializador
        model = RegistroFacial # Se define el modelo que se va a serializar
        fields = '__all__' # Se indica que se van a serializar todos los campos del modelo