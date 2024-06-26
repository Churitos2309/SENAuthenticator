from django.urls import path, re_path
from app_senauthenticator.controllers import programa, ficha, registro_facial, contacto_emergencia
from app_senauthenticator import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('registroFacial/', registro_facial.registro_facial_controlador),
    path('registroFacial/<int:pk>/', registro_facial.registro_facial_controlador),
    path('programa/', programa.programa_controlador),
    path('programa/<int:pk>/', programa.programa_controlador),
    path('ficha/', ficha.ficha_controlador),
    path('ficha/<int:pk>/', ficha.ficha_controlador),
    path('usuario/', views.UsuarioListarCrear.as_view()),
    path('usuario/<int:pk>/', views.UsuarioDetalles.as_view()),
    path('objeto/', views.ObjetoListarCrear.as_view()),
    path('objeto/<int:pk>/', views.ObjetoDetalles.as_view()),
    path('contactoEmergencia/', contacto_emergencia.contacto_emergencia_controlador),
    path('contactoEmergencia/<int:pk>/', contacto_emergencia.contacto_emergencia_controlador),
    path('ingreso/', views.IngresoListarCrear.as_view()),
    path('ingreso/<int:pk>/', views.IngresoDetalles.as_view()),
    path('crear_usuario/', views.RegistroFacialListCreateView.as_view(), name='registro_facial_list_create'),
    path('crear_usuario/<int:pk>/', views.RegistroFacialRetrieveUpdateDestroyView.as_view(), name='registro_facial_retrieve_update_destroy'),
    re_path(r'^login/$', views.login_view, name='login'),
    re_path(r'^forgot-password/$', views.forgot_password_view, name='forgot_password'),
    # re_path('login', views.login()),
    # re_path('register', views.register()),
    # re_path('profile', views.profile())
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
