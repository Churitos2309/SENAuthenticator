from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.decorators import authentication_classes,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth import authenticate
#Importaciones de Tokens


#Funciones Para authentificacion y proteccion de datos atravez de tokens
# @api_view(['POST'])
# def login (request):
#     user=get_object_or_404(User,username=request.data['username'])
#     if not user.check_password(request.data['password']):
#         return Response({"error":"Invalid password"},status=status.HTTP_400_BAD_REQUEST)
#     token,created=Token.objects.get_or_create(user=user)
#     serializer=UsuarioSerializer(instance=user)
    
#     return Response({"token":token.key,"user":serializer.data},status=status.HTTP_200_OK)
    
#     return Response({})

@api_view(['POST'])
def login(request):
    tipo_documento = request.data.get('tipo_documento_usuario')
    numero_documento = request.data.get('numero_documento_usuario')
    password = request.data.get('password')

    if not tipo_documento or not numero_documento or not password:
        return Response({'error': 'Tipo de documento, número de documento y contraseña son requeridos'}, status=status.HTTP_400_BAD_REQUEST)

    user = authenticate(tipo_documento=tipo_documento, numero_documento=numero_documento, password=password)

    if not user:
        return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_400_BAD_REQUEST)

    # Obtener el rol del usuario
    rol_usuario = user.rol_usuario

    # Redireccionar según el rol del usuario
    if rol_usuario == 'administrador':
        return Response({'token': 'token_administrador', 'ruta': '/admin'}, status=status.HTTP_200_OK)
    elif rol_usuario == 'guardia':
        return Response({'token': 'token_docente', 'ruta': '/guardia'}, status=status.HTTP_200_OK)
    elif rol_usuario == 'aprendiz':
        return Response({'token': 'token_estudiante', 'ruta': '/aprendiz'}, status=status.HTTP_200_OK)
    elif rol_usuario == 'instructor':
        return Response({'token': 'token_estudiante', 'ruta': '/instructor'}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Rol de usuario no reconocido'}, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# def register (request):
#     serializer=UsuarioSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
        
#         user=User.objects.get(username=serializer.data['username'])
#         user.set_password(serializer.data['password'])
#         user.save()
        
#         token=Token.objects.create(user=user)
#         return Response({'token':token.key,"user":serializer.data},status=status.HTTP_201_CREATED)
        # return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def register(request):
    serializer = UsuarioSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = serializer.data
        user.set_password(serializer.data['password'])
        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': user}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    
    
    

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def profile (request):
    # print(request.user)
    print (request.user.id)
    serializer =UsuarioSerializer(instance=request.user)
    
    
    
    # return Response("Estas Logeado con {}".format(request.user.username),status=status.HTTP_200_OK)
    return Response(serializer.data,status=status.HTTP_200_OK)


from rest_framework import viewsets
from .serializer import UsuarioSerializer, FichaSerializer, ContactoEmergenciaSerializer
from .models import Usuario, Ficha

# Create your views here.
class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()  

class FichaView(viewsets.ModelViewSet):
    serializer_class = FichaSerializer
    queryset = Ficha.objects.all()

class ContactoEmergenciaView(viewsets.ModelViewSet):
    serializer_class = ContactoEmergenciaSerializer
    queryset = Ficha.objects.all()
    
    
