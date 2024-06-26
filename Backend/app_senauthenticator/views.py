# views.py
from rest_framework import generics
from .models import Programa, Ficha, Usuario, Objeto, ContactoEmergencia, Ingreso, SesionLogin
from .serializers import ProgramaSerializer, FichaSerializer, UsuarioSerializer, ObjetoSerializer, ContactoEmergenciaSerializer, IngresoSerializer, SesionLoginSerializer
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.core.mail import send_mail
import random
import string

# Vista de Login
@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)

    if user is not None:
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

# Vista de Olvido de Contraseña
@api_view(['POST'])
def forgot_password_view(request):
    try:
        email = request.data.get('email')
        user = User.objects.get(email=email)
        
        reset_code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
        user.profile.reset_code = reset_code
        user.profile.save()
        
        send_mail(
            'Código de recuperación de contraseña',
            f'Tu código de recuperación es: {reset_code}',
            'from@example.com',
            [email],
            fail_silently=False,
        )
        
        return Response({'message': 'Código de recuperación enviado a tu correo electrónico.'}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'error': 'Correo electrónico no encontrado.'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# Registro de Usuario
class RegistroFacialListCreateView(generics.ListCreateAPIView):
    queryset = SesionLogin.objects.all()
    serializer_class = SesionLoginSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class RegistroFacialRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SesionLogin.objects.all()
    serializer_class = SesionLoginSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

# Controladores de Programas de Formación
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

# Controladores de Fichas de los Programas de Formación
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

# Controladores de Usuarios
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

# Controladores de Objetos que Registran los Usuarios
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

# Controladores de Contactos de Emergencia de los Usuarios
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

# Controladores de Ingresos de los Usuarios al Centro de Formación
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
