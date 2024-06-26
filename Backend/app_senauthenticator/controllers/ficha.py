
# Api del proyecto, para enviar y recibir información de manera eficiente

# se importan los modelos 
from app_senauthenticator.models import Ficha
# se importan los serializers
from app_senauthenticator.serializers.ficha import FichaSerializer

# extensiones para hacer las autenticaciones

from rest_framework.decorators import api_view, authentication_classes, permission_classes
# En esta importamos todos los controladores de serializer

from rest_framework.response import Response # sirve para devolver respuestas HTTP
# Aquí importo como una función para crear los tokens
from rest_framework.authtoken.models import Token
from rest_framework import status # Sirve para usar códigos de estado HTTP

from django.shortcuts import get_object_or_404
from rest_framework. permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def ficha_controlador(request, pk=None):
    if pk:
        try:
            ficha = Ficha.objects.get(pk=pk)
        except Ficha.DoesNotExist:
            return Response({'error': 'Ficha no encontrada.'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        if request.method == 'GET':
            try:
                serializer = FichaSerializer(ficha)
                if serializer.is_valid():
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        elif request.method == 'PUT':
            try:
                serializer = FichaSerializer(ficha, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        elif request.method == 'DELETE':
            try:
                ficha.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
    else:
        if request.method == 'GET':
            try:                
                fichas = Ficha.objects.all()
                serializer = FichaSerializer(fichas, many=True)
                if serializer.is_valid():
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)            
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        elif request.method == 'POST':
            try:
                serializer = FichaSerializer(data=request.data)
                if serializer.is_valid():
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)                                
