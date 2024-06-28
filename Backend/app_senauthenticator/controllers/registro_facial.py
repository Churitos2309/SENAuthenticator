
# Api del proyecto, para enviar y recibir información de manera eficiente

# se importan los modelos 
from app_senauthenticator.models import RegistroFacial
# se importan los serializers
from app_senauthenticator.serializers.registro_facial import RegistroFacialSerializer

# extensiones para hacer las autenticaciones

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from rest_framework.response import Response # sirve para devolver respuestas HTTP
# Aquí importo como una función para crear los tokens
from rest_framework.authtoken.models import Token
from rest_framework import status # Sirve para usar códigos de estado HTTP

from django.shortcuts import get_object_or_404
from rest_framework. permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

@api_view(['GET', 'POST', 'PUT', 'DELETE']) # Se especifica las solicitudes HTTP que va a manejar el controlador
def registro_facial_controlador(request, pk=None): # La función contiene dos parámetros, request: Recibe las solicitudes HTTP y pk: Recibe la primary key de un dato.
    # Si existe la pk se manejan los métodos GET, PUT, DELETE
    if pk:
        try:            
            registro_facial = RegistroFacial.objects.get(pk=pk) # Se intenta obtener el dato por su pk
        except RegistroFacial.DoesNotExist:
            return Response({'error': 'Registro facial no encontrado'}, status=status.HTTP_404_NOT_FOUND) # Si el dato no existe se devuelve un error 404, indicando que no fue encontrada la solicitud
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) # Si ocurre cualquier otro error, se devuelve un error 500, indicando un error interno en el servidor

        # Si se obtiene el dato, se serializa y se devuelve en formato json 
        if request.method == 'GET':
            try:
                serializer = RegistroFacialSerializer(registro_facial)
                return Response(serializer.data)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
        
        # Solicitud para actualizar un dato
        elif request.method == 'PUT':
            try:
                serializer = RegistroFacialSerializer(registro_facial, data=request.data) # Se intenta serializar la instancia del modelo, y los nuevos datos para actualizar
                if serializer.is_valid(): # si los datos son válidos
                    serializer.save() # Se guarda la instancia actualizada
                    return Response(serializer.data, status=status.HTTP_200_OK) # Se devuelve una respuesta con los datos actualizados, y un código de estado 200, confirmando que la solicitud es correcta.
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # Si los datos no son válidos, se devuelve un error 400, indicando una solicitud incorrecta.
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
        
        # Solicitud para eliminar un dato
        elif request.method == 'DELETE':
            try:
                registro_facial.delete() # Se intenta eliminar el dato
                return Response(status=status.HTTP_204_NO_CONTENT) # Si se elimina, se devuelve una respuesta con un estado 204, indicando que la solicitud es correcta pero no hay contenido para mostrar
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)        

    # Si no existe la pk se manejan los métodos GET, POST
    else:
        # Solicitud para obtener todos los datos en una lista
        if request.method == 'GET':
            try:
                registros_faciales = RegistroFacial.objects.all() # Se intenta obtener todos los datos
                serializer = RegistroFacialSerializer(registros_faciales, many=True) # Se serializan los datos con la opción many=True para indicar que se están serializando múltiples objetos
                return Response(serializer.data) # Se devuelve una respuesta con los datos serializados
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # Solicitud para crear un dato
        elif request.method == 'POST':
            try:
                serializer = RegistroFacialSerializer(data=request.data) # Se intenta crear un nuevo dato utilizando los campos proporcinados en la solicitud request.data, y se serializa
                if serializer.is_valid(): # si el dato es válido
                    serializer.save() # Se guarda 
                    return Response(serializer.data, status=status.HTTP_201_CREATED) # Se devuelve una respuesta con un código de estado 201, indicando que fue creado
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # Si el dato no es válido, se devuelve un código de estado 400, indicando una solicitud inconrrecta
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)