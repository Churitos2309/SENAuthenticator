from django.urls import path
from app_senauthenticator.controllers import programa, ficha, usuario, registro_facial, objeto, contacto_emergencia, ingreso
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('programa/', programa.programa_controlador),
    path('programa/<int:pk>/', programa.programa_controlador),
    path('ficha/', ficha.ficha_controlador),
    path('ficha/<int:pk>/', ficha.ficha_controlador),
    path('usuario/', usuario.usuario_controlador),
    path('usuario/<int:pk>/', usuario.usuario_controlador),
    path('registroFacial/', registro_facial.registro_facial_controlador),
    path('registroFacial/<int:pk>/', registro_facial.registro_facial_controlador),
    path('objeto/', objeto.objeto_controlador),
    path('objeto/<int:pk>/', objeto.objeto_controlador),
    path('contactoEmergencia/', contacto_emergencia.contacto_emergencia_controlador),
    path('contactoEmergencia/<int:pk>/', contacto_emergencia.contacto_emergencia_controlador),
    path('ingreso/', ingreso.ingreso_controlador),
    path('ingreso/<int:pk>/', ingreso.ingreso_controlador),
    path('inicioSesion/', usuario.inicio_sesion),
    path('perfil/', usuario.perfil)
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
<<<<<<< HEAD
    )
=======
    )
    
>>>>>>> ebb300cc574f2bd06e7f6707dcf5acc30c95fe02
