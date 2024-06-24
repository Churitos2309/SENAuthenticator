

from django.urls import path,re_path
from app_senauthenticator import views
from django.conf import settings
from django.conf.urls.static import static
from .views import register,login,profile

urlpatterns = [
    path('registroFacial/', views.RegistroFacialListarCrear.as_view()),
    path('registroFacial/<int:pk>/', views.RegistroFacialDetalles.as_view()),
    path('programa/', views.ProgramaListarCrear.as_view()),
    path('programa/<int:pk>/', views.ProgramaDetalles.as_view()),
    path('ficha/', views.FichaListarCrear.as_view()),
    path('ficha/<int:pk>/', views.FichaDetalles.as_view()),
    path('usuario/', views.UsuarioListarCrear.as_view()),
    path('usuario/<int:pk>/', views.UsuarioDetalles.as_view()),
    path('objeto/', views.ObjetoListarCrear.as_view()),
    path('objeto/<int:pk>/', views.ObjetoDetalles.as_view()),
    path('contactoEmergencia/', views.ContactoEmergenciaListarCrear.as_view()),
    path('contactoEmergencia/<int:pk>/', views.ContactoEmergenciaDetalles.as_view()),
    path('ingreso/', views.IngresoListarCrear.as_view()),
    path('ingreso/<int:pk>/', views.IngresoDetalles.as_view()),
    path('inicio_sesion/', login),
    path('registro/', register),
    path('perfil/', profile),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
