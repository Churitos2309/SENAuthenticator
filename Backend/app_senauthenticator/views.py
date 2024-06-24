from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
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
        user = serializer.save()
        user.set_password(request.data['contrasenia_usuario'])
        user.save()  # Save the user object to MongoDB

        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#'rest_framework.authtoken',
        
###Viejo Funcion Register

# @api_view(['POST'])
# def register(request):
#     serializer = UsuarioSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         user = serializer.data
#         user.set_password(serializer.data['password'])
#         user.save()
#         token = Token.objects.create(user=user)
#         return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

###Julieth register
# @api_view(['POST'])
# def register(request):
#     print(request.data)
    
#     serializer = UserSerializer(data= request.data)
    
    
#     if serializer.is_valid():
#         serializer.save()
        
#         user= User.objects.get(username= serializer.data["username"])
#         user.set_password(serializer.data['password'])
#         user.save()
#         token = Token.objects.create(user= user)
#         return Response ({'token': token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)
    
#     return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
        
    
    
    

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def profile (request):
    # print(request.user)
    print (request.user.id)
    serializer =UsuarioSerializer(instance=request.user)
    
    
    
    # return Response("Estas Logeado con {}".format(request.user.username),status=status.HTTP_200_OK)
    return Response(serializer.data,status=status.HTTP_200_OK)



# Apis del proyecto, para enviar y recibir información de manera eficiente

from rest_framework import generics

# se importan los modelos 
from .models import RegistroFacial, Programa, Ficha, Usuario, Objeto, ContactoEmergencia, Ingreso
# se importan los serializers
from .serializer import RegistroFacialSerializer, ProgramaSerializer, FichaSerializer, UsuarioSerializer, ObjetoSerializer, ContactoEmergenciaSerializer, IngresoSerializer


# Controlador de los programas de formación
class RegistroFacialListarCrear(generics.ListCreateAPIView): # la vista generica ListCreateAPIView maneja las solicitudes listar y crear (GET, POST)
    queryset = RegistroFacial.objects.all() # se obtienen todos los objetos del modelo
    serializer_class = RegistroFacialSerializer# se utiliza el serializer para convertir los objetos a JSON
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class RegistroFacialDetalles(generics.RetrieveUpdateDestroyAPIView): # la vista generica RetrieveUpdateDestroyAPIView maneja las solicitudes para recuperar por pk, actualizar y eliminar (GET, PUT Y DELETE)
    queryset = RegistroFacial.objects.all()
    serializer_class = RegistroFacialSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

# Controlador de los programas de formación
class ProgramaListarCrear(generics.ListCreateAPIView):
    queryset = Programa.objects.all()
    serializer_class = ProgramaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class ProgramaDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Programa.objects.all()
    serializer_class = ProgramaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


# Controlador de las Fichas de los programas de formación
class FichaListarCrear(generics.ListCreateAPIView):
    queryset = Ficha.objects.all()
    serializer_class = FichaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class FichaDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ficha.objects.all()    
    serializer_class = FichaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


# Controlador de los Usuarios
class UsuarioListarCrear(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()    
    serializer_class = UsuarioSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class UsuarioDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


# Controlador de los Objetos que registran los Usuarios    
class ObjetoListarCrear(generics.ListCreateAPIView):
    queryset = Objeto.objects.all()
    serializer_class = ObjetoSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class ObjetoDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Objeto.objects.all()
    serializer_class = ObjetoSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


# Controlador de los contactos de emergencia que tienen los Usuarios
class ContactoEmergenciaListarCrear(generics.ListCreateAPIView):
    queryset = ContactoEmergencia.objects.all()
    serializer_class = ContactoEmergenciaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    

class ContactoEmergenciaDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactoEmergencia.objects.all()
    serializer_class = ContactoEmergenciaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


# Controlador de los Ingresos de los usuarios al centro de formación
class IngresoListarCrear(generics.ListCreateAPIView):
    queryset = Ingreso.objects.all()
    serializer_class = IngresoSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class IngresoDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingreso.objects.all()
    serializer_class = IngresoSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]